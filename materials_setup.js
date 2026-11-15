'use strict';
const f=document.querySelector('#settings-form'), box=document.querySelector('#editor-rows');
const config=typeof courseMaterials==='undefined'?{first:{},second:{}}:courseMaterials;
document.querySelector('#first-folder').value=config.first?.folderUrl||'';
document.querySelector('#second-folder').value=config.second?.folderUrl||'';
function addRow(data={}){
 const row=document.createElement('div');row.className='setup-row';
 row.innerHTML='<label>学期<select name="term"><option value="first">前期</option><option value="second">後期</option></select></label><label>回<input name="number" type="number" min="1" max="999" placeholder="例：1"></label><label>授業名<input name="title" placeholder="例：モーツァルト"></label><label>資料名<input name="name" placeholder="例：レジュメ"></label><label>Google Drive の共有リンク<input name="url" type="url" placeholder="https://drive.google.com/..."></label><button type="button" class="remove-row" aria-label="この資料を削除">×</button>';
 for(const key of ['term','number','title','name','url'])row.querySelector(`[name="${key}"]`).value=data[key]||'';
 if(!data.term)row.querySelector('[name="term"]').value='first';row.querySelector('.remove-row').onclick=()=>row.remove();box.append(row);
}
for(const term of ['first','second'])for(const lesson of config[term]?.lessons||[])for(const file of lesson.files||[])addRow({term,number:lesson.number,title:lesson.title,name:file.name,url:file.url});
document.querySelector('#add-row').onclick=()=>addRow();
function valid(v){try{const u=new URL(v);return u.protocol==='https:'&&['drive.google.com','docs.google.com'].includes(u.hostname)}catch{return false}}
f.addEventListener('submit',e=>{e.preventDefault();const error=document.querySelector('#error');error.hidden=true;const result={first:{folderUrl:document.querySelector('#first-folder').value.trim(),lessons:[]},second:{folderUrl:document.querySelector('#second-folder').value.trim(),lessons:[]}};
 for(const key of ['first','second'])if(result[key].folderUrl&&!valid(result[key].folderUrl)){error.textContent='フォルダには Google Drive または Google ドキュメントの https:// リンクを入力してください。';error.hidden=false;return}
 const seenTitles=new Map();for(const [i,row] of [...box.children].entries()){const get=k=>row.querySelector(`[name="${k}"]`).value.trim();let term=get('term'),number=Number(get('number')),title=get('title'),name=get('name'),url=get('url');if(!url&&!get('number')&&!title&&!name)continue;if(!Number.isInteger(number)||number<1||number>999||!name||!valid(url)){error.textContent=`資料 ${i+1} 行目を確認してください。学期・回数・資料名と Google Drive の共有リンクが必要です。`;error.hidden=false;return}let id=term+':'+number;if(title&&seenTitles.has(id)&&seenTitles.get(id)!==title){error.textContent=`資料 ${i+1} 行目：同じ授業回の授業名を統一してください。`;error.hidden=false;return}if(title)seenTitles.set(id,title);let lesson=result[term].lessons.find(x=>x.number===number);if(!lesson){lesson={number,title,files:[]};result[term].lessons.push(lesson)}if(title)lesson.title=title;lesson.files.push({name,url})}
 const text='// Google Driveの共有リンク。閲覧権限はDrive側で設定してください。\\n'.replace('\\n','\n')+'const courseMaterials = '+JSON.stringify(result,null,2)+';\n';const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([text],{type:'text/javascript;charset=utf-8'}));link.download='materials.js';link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
});
