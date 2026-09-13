type Command = { label:string; href?:string; action?:string; detail:string };
const data = JSON.parse(document.querySelector('#site-data')!.textContent!) as { commands:Command[]; email:string; name:string; projects:string[] };
const palette = document.querySelector<HTMLDialogElement>('#palette')!;
const help = document.querySelector<HTMLDialogElement>('#shortcuts')!;
const terminal = document.querySelector<HTMLDialogElement>('#terminal')!;
const search = document.querySelector<HTMLInputElement>('#command-search')!;
const results = document.querySelector<HTMLDivElement>('#command-results')!;
const status = document.querySelector<HTMLParagraphElement>('#command-status')!;
let active=0;
let filtered:Command[]=[];
let returnFocus:HTMLElement|null=null;
function closeAll(){ document.querySelectorAll<HTMLDialogElement>('dialog[open]').forEach(d=>d.close()); }
function open(dialog:HTMLDialogElement){
 if(!document.querySelector('dialog[open]')) returnFocus=document.activeElement as HTMLElement;
 closeAll();dialog.showModal();
 if(dialog===palette){search.value='';status.textContent='';active=0;render();search.focus();}
 if(dialog===terminal) document.querySelector<HTMLInputElement>('#terminal-input')!.focus();
}
document.querySelectorAll<HTMLDialogElement>('dialog').forEach(d=>{
 d.querySelector('[data-close]')?.addEventListener('click',()=>d.close());
 d.addEventListener('click',event=>{if(event.target===d){const r=d.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)d.close();}});
 d.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))returnFocus?.focus();});
});
document.querySelector('[data-open=palette]')?.addEventListener('click',()=>open(palette));
async function run(command:Command){
 if(command.href){location.href=command.href;return;}
 if(command.action==='help'){open(help);return;}
 if(command.action==='light'||command.action==='dark'){
 const theme=command.action;document.documentElement.dataset.theme=theme;try{localStorage.setItem('theme',theme);}catch{}
 status.textContent=`Switched to ${theme} theme.`;return;
 }
 if(command.action==='email'&&data.email){try{await navigator.clipboard.writeText(data.email);status.textContent='Email copied.';}catch{status.textContent=data.email;}return;}
 status.textContent=command.action==='email'?'Email has not been added yet. Find Tristan on GitHub.':'LinkedIn has not been added yet.';
}
function highlight(){results.querySelectorAll<HTMLButtonElement>('button').forEach((b,i)=>{b.dataset.active=String(i===active);});results.querySelector('[data-active=true]')?.scrollIntoView({block:'nearest'});}
function render(){
 const query=search.value.toLowerCase().trim();filtered=data.commands.filter(c=>(c.label+' '+c.detail).toLowerCase().includes(query));active=0;results.replaceChildren();
 filtered.forEach((command,index)=>{const b=document.createElement('button');b.type='button';const label=document.createElement('span');label.textContent=command.label;const detail=document.createElement('small');detail.textContent=command.detail;b.append(label,detail);b.addEventListener('click',()=>void run(command));b.addEventListener('focus',()=>{active=index;highlight();});b.addEventListener('pointermove',()=>{active=index;highlight();});results.append(b);});
 if(!filtered.length){const p=document.createElement('p');p.className='dialog-hint';p.textContent='No matches. Try a page, project, or note.';results.append(p);}highlight();
}
search.addEventListener('input',render);
palette.addEventListener('keydown',e=>{
 if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(filtered.length){active=(active+(e.key==='ArrowDown'?1:-1)+filtered.length)%filtered.length;highlight();(results.children[active] as HTMLButtonElement).focus();}}
 if(e.key==='Enter'&&e.target===search&&filtered[active]){e.preventDefault();void run(filtered[active]);}
 if(e.target!==search&&e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey){search.focus();}
});
document.addEventListener('keydown',e=>{
 if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();palette.open?palette.close():open(palette);return;}
 if(e.key==='Escape'){closeAll();return;}
 const target=e.target as HTMLElement;
 if(target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')||e.metaKey||e.ctrlKey||e.altKey||document.querySelector('dialog[open]'))return;
 const routes:Record<string,string>={a:'/about',p:'/projects',n:'/notes','/':'/ask'};
 if(routes[e.key]){e.preventDefault();location.href=routes[e.key];}
 if(e.key==='?'){e.preventDefault();open(help);}
 if(e.key==='~'){e.preventDefault();open(terminal);}
});
const time=document.querySelector<HTMLTimeElement>('#nyc-time')!;
const formatter=new Intl.DateTimeFormat('en-GB',{timeZone:time.dataset.timezone,hour:'2-digit',minute:'2-digit',hour12:false});
function updateTime(){const now=new Date();time.textContent='NYC · '+formatter.format(now);time.dateTime=now.toISOString();}
updateTime();setInterval(updateTime,15000);
const terminalForm=document.querySelector<HTMLFormElement>('#terminal-form')!;
const terminalInput=document.querySelector<HTMLInputElement>('#terminal-input')!;
const terminalOutput=document.querySelector<HTMLDivElement>('#terminal-output')!;
terminalForm.addEventListener('submit',e=>{e.preventDefault();const command=terminalInput.value.trim().toLowerCase();terminalInput.value='';if(!command)return;
 if(command==='exit'){terminal.close();return;}if(command==='clear'){terminalOutput.textContent='';return;}
 const output:Record<string,string>={help:'help · whoami · projects · now · ask · clear · exit',whoami:data.name,projects:data.projects.join('\n')};
 if(command==='now'||command==='ask'){location.href='/'+command;return;}
 terminalOutput.textContent+='\n❯ '+command+'\n'+(output[command]||'Unknown command. Try help.');terminalOutput.scrollTop=terminalOutput.scrollHeight;
});
// Native details provide keyboard and touch access; pointer hover is an enhancement.
if(matchMedia('(hover:hover) and (pointer:fine)').matches){document.querySelectorAll<HTMLDetailsElement>('.project').forEach(project=>{let pinned=project.open;project.addEventListener('pointerenter',()=>{project.open=true;});project.addEventListener('pointerleave',()=>{project.open=pinned;});project.querySelector('summary')!.addEventListener('click',e=>{e.preventDefault();pinned=!pinned;project.open=pinned;});});}
