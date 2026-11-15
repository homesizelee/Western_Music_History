'use strict';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const state = {term:'first', mode:'truefalse', scope:'all', questions:[], index:0, correct:0, answered:false};
const bank = {first:{truefalse:trueFalseQuestions,multiple:multipleChoiceQuestions},second:{truefalse:secondTermTrueFalseQuestions,multiple:secondTermMultipleChoiceQuestions}};
const termLabel = () => state.term === 'first' ? '前期' : '後期';
const modeLabel = () => state.mode === 'truefalse' ? 'マルバツ問題' : '4択問題';
const source = () => bank[state.term][state.mode];
function shuffle(items){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function sessionNumber(range){const s=String(range||'').trim();const m=s.match(/第\s*(\d+)\s*回/);if(m)return Number(m[1]);if(state.term==='first'&&(/^バロック期の音楽[（(]2[）)]/.test(s)||s.includes('17世紀音楽の新しい語法と声楽ジャンル')))return 13;return null}
function sessions(){const groups=new Map();for(const q of source()){const n=sessionNumber(q.range);if(n===null)continue;if(!groups.has(n))groups.set(n,[]);groups.get(n).push(q)}return [...groups.entries()].sort((a,b)=>a[0]-b[0])}
function screen(id){$$('.screen').forEach(el=>el.hidden=el.id!==id); window.scrollTo(0,0);}
function modeScreen(){$$('.term-name').forEach(x=>x.textContent=termLabel());$('#tf-count').textContent=bank[state.term].truefalse.length+' 問';$('#mc-count').textContent=bank[state.term].multiple.length+' 問';screen('mode')}
function ranges(){const items=source();$$('.term-name').forEach(x=>x.textContent=termLabel());$$('.mode-name').forEach(x=>x.textContent=modeLabel());$('#all-count').textContent=items.length+' 問';$('#all').disabled=!items.length;const list=$('#range-list');list.replaceChildren();for(const [num,questions] of sessions()){const b=document.createElement('button');b.className='range-item';const n=document.createElement('span');n.className='range-num';n.textContent=`第${num}回`;const title=document.createElement('span');title.className='range-title';title.textContent=String(questions[0].range).replace(/^第\s*\d+\s*回\s*[:：]?\s*/,'');const count=document.createElement('span');count.className='count';count.textContent=questions.length+' 問';b.append(n,title,count);b.onclick=()=>start(num);list.append(b)}$('#empty-range').hidden=items.length>0;screen('ranges')}
function start(scope){state.scope=scope;const available=scope==='all'?source():source().filter(q=>sessionNumber(q.range)===scope);if(!available.length)return;state.questions=shuffle(available);state.index=0;state.correct=0;state.answered=false;$('#question-view').hidden=false;$('#finished').hidden=true;$('#status').hidden=false;screen('quiz');question()}
function question(){if(state.index>=state.questions.length){finish();return}const q=state.questions[state.index];state.answered=false;const n=state.index+1,total=state.questions.length,percent=Math.round((n/total)*100);$('#progress-text').textContent=`${n} / ${total}`;$('#progress-bar').style.width=percent+'%';$('.progress-track').setAttribute('aria-valuenow',String(percent));$('.progress-track').setAttribute('aria-valuetext',`${total}問中${n}問目`);$('#quiz-range').textContent=`出題範囲：${q.range}`;$('#quiz-mode').textContent=`${termLabel()} ／ ${modeLabel()}`;$('#question-number').textContent='QUESTION '+String(n).padStart(2,'0');$('#question-text').textContent=q.question;$('#feedback').hidden=true;$('#next').hidden=true;const choices=state.mode==='truefalse'?['○','×']:shuffle(q.choices);const target=$('#choices');target.replaceChildren();choices.forEach((choice,i)=>{const b=document.createElement('button');b.className='choice';const k=document.createElement('span');k.className='choice-key';k.textContent=state.mode==='truefalse'?choice:'ABCD'[i];const text=document.createElement('span');text.textContent=choice;b.append(k,text);b.dataset.answer=choice;b.onclick=()=>answer(choice,b);target.append(b)});$('#question-text').focus({preventScroll:true})}
function answer(value,button){if(state.answered)return;state.answered=true;const q=state.questions[state.index],isCorrect=value===q.answer;if(isCorrect)state.correct++;$$('.choice').forEach(el=>{el.disabled=true;if(el.dataset.answer===q.answer)el.classList.add('correct')});if(!isCorrect)button.classList.add('wrong');const box=$('#feedback');box.className='feedback'+(isCorrect?'':' wrong');box.replaceChildren();const heading=document.createElement('strong');heading.textContent=isCorrect?'✓ 正解です':'不正解です';const detail=document.createElement('p');detail.textContent='正解：'+q.answer;box.append(heading,detail);box.hidden=false;$('#next').hidden=false;$('#next').textContent=state.index===state.questions.length-1?'結果を見る →':'次の問題へ →';$('#next').focus({preventScroll:true})}
function finish(){const total=state.questions.length,percent=Math.round(state.correct/total*100);$('#question-view').hidden=true;$('#status').hidden=true;$('#progress-text').textContent=`${total} / ${total}`;$('#progress-bar').style.width='100%';$('.progress-track').setAttribute('aria-valuenow','100');$('#quiz-range').textContent='全問終了';const el=$('#finished');el.replaceChildren();const score=document.createElement('div');score.className='score';score.textContent=percent+'%';const h=document.createElement('h2');h.textContent='おつかれさまでした';const p=document.createElement('p');p.textContent=`${total}問中 ${state.correct}問 正解しました。`;const d=document.createElement('div');d.className='finish-actions';const retry=document.createElement('button');retry.className='primary';retry.textContent='同じ範囲でもう一度';retry.onclick=()=>start(state.scope);const back=document.createElement('button');back.className='secondary';back.textContent='回数選択へ戻る';back.onclick=ranges;d.append(retry,back);el.append(score,h,p,d);el.hidden=false;retry.focus({preventScroll:true})}
function status(){const answered=Math.min(state.index+(state.answered?1:0),state.questions.length),wrong=answered-state.correct,remaining=state.questions.length-answered,rate=answered?Math.round(state.correct/answered*100):0;const stats=$('#stats');stats.replaceChildren();for(const [label,value] of [['解答済み',answered+'問'],['正解',state.correct+'問'],['不正解',wrong+'問'],['残り',remaining+'問'],['正解率',rate+'%']]){const el=document.createElement('div');el.className='stat';const v=document.createElement('strong');v.textContent=value;const l=document.createElement('span');l.textContent=label;el.append(v,l);stats.append(el)}$('#status-dialog').showModal()}
function termScreen(){
  $$('.term-name').forEach(x=>x.textContent=termLabel());
  $('#term-index-label').textContent=state.term==='first'?'西洋音楽史 1':'西洋音楽史 2';
  screen('term');
}
function driveLink(value){
  try {const u=new URL(String(value||'')); return u.protocol==='https:' && ['drive.google.com','docs.google.com'].includes(u.hostname) ? u.href : null} catch {return null}
}
function materialLink(url,text){
  const a=document.createElement('a'); a.className='listen-link'; a.href=url; a.target='_blank'; a.rel='noopener noreferrer'; a.textContent=text+' ↗';return a;
}
function renderMaterials(){
  $$('.term-name').forEach(x=>x.textContent=termLabel());
  const data=courseMaterials[state.term]||{folderUrl:'',lessons:[]};
  const folder=$('#material-folder');folder.replaceChildren(); const url=driveLink(data.folderUrl);
  if(url){const p=document.createElement('p');p.textContent='Google Drive の授業資料フォルダを開く';folder.append(p,materialLink(url,'フォルダを開く'));folder.hidden=false}else folder.hidden=true;
  const configured=Array.isArray(data.lessons)?data.lessons:[];
  const numbers=new Set(Array.from({length:15},(_,i)=>i+1));
  configured.forEach(lesson=>{if(Number.isInteger(lesson.number)&&lesson.number>0)numbers.add(lesson.number)});
  const list=$('#materials-list');list.replaceChildren();
  [...numbers].sort((a,b)=>a-b).forEach(number=>{
    const lesson=configured.find(x=>x.number===number)||{};
    const row=document.createElement('article');row.className='material-row';
    const label=document.createElement('span');label.className='material-number';label.textContent=`第${number}回`;
    const content=document.createElement('div');content.className='material-content';
    const title=document.createElement('strong');title.textContent=lesson.title||'授業資料';content.append(title);
    const links=document.createElement('div');links.className='material-links';
    const files=Array.isArray(lesson.files)?lesson.files:[];
    files.forEach(file=>{const href=driveLink(file.url);if(href)links.append(materialLink(href,file.name||'資料を開く'))});
    if(!links.children.length){const pending=document.createElement('span');pending.className='material-pending';pending.textContent='準備中';links.append(pending)}
    content.append(links);row.append(label,content);list.append(row);
  });
}
function renderListening(){const items=state.term==='first'?listeningItems:laterListeningItems;const query=$('#search').value.trim().toLocaleLowerCase();const matching=items.filter(x=>[x.title,x.composer,x.date].some(v=>String(v||'').toLocaleLowerCase().includes(query)));const target=$('#listen-list');target.replaceChildren();matching.forEach(item=>{const row=document.createElement('article');row.className='listen-item';const details=document.createElement('div');details.className='details';const title=document.createElement('strong');title.textContent=item.title;const description=document.createElement('p');description.textContent=[item.composer,item.date].filter(Boolean).join(' · ');details.append(title,description);const link=document.createElement('a');link.className='listen-link';link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Naxos で聴く ↗';row.append(details,link);target.append(row)});$('#listen-empty').hidden=items.length>0;$('#no-results').hidden=!items.length||matching.length>0}
$$('[data-term]').forEach(b=>b.onclick=()=>{state.term=b.dataset.term;termScreen()});
$$('[data-mode]').forEach(b=>b.onclick=()=>{state.mode=b.dataset.mode;ranges()});
$$('[data-go]').forEach(b=>b.onclick=()=>{if(b.dataset.go==='home')screen('home');else if(b.dataset.go==='term')termScreen();else if(b.dataset.go==='mode')modeScreen();else ranges()});
$('#open-quiz').onclick=modeScreen;
$('#open-materials').onclick=()=>{renderMaterials();screen('materials')};
$('#open-listening').onclick=()=>{$('#search').value='';renderListening();screen('listening')};
$('#all').onclick=()=>start('all');$('#next').onclick=()=>{state.index++;question()};$('#status').onclick=status;
$('#search').addEventListener('input',renderListening);
$('.brand').addEventListener('click',e=>{e.preventDefault();screen('home')});
document.addEventListener('keydown',event=>{if($('#quiz').hidden||$('#status-dialog').open||$('#finished').hidden===false)return;if(!state.answered&&/^[1-4]$/.test(event.key)){$$('.choice')[Number(event.key)-1]?.click()}else if(state.answered&&event.key==='ArrowRight')$('#next').click()});
