const journeyData=[
['疼痛终于超过忍耐阈值','腰、臀、髋或肩颈在 30–60 分钟后出现不适；旧椅塌陷、掉皮或居家办公叠加游戏时长，久坐不再可凑合。','警觉、后悔、急于补救'],
['从“最佳椅子”问题开始','在 Reddit、YouTube、零售评论中搜索真实的长时反馈；很快发现推荐彼此矛盾，“人体工学”也不保证适合自己。','信息过载、怀疑营销'],
['把身体翻译成参数','预算、身高体重、座宽座深、网面或泡棉、头枕、扶手与后仰角共同缩小候选；审美仍在悄悄影响选择。','理性比较、担心遗漏'],
['五分钟试坐不够用','线下短坐难以暴露数小时后才累积的压力、热量与姿势限制；线上购买则把退货政策、保修和组装难度变成产品体验的一部分。','期待、下注感'],
['在“疼痛”和“适应”间猜测','复杂调节需要数天甚至数周摸索。用户缺乏清晰反馈，不知道应继续微调、等待适应，还是立刻退货。','困惑、自我怀疑'],
['用身体和时间给出答案','真正的口碑发生在数月之后：疼痛是否消失、网面是否松弛、PU 是否开裂、扶手是否晃动，以及是否仍愿意坐回去。','确信或强烈后悔']
];
document.querySelectorAll('.step').forEach((b,i)=>b.addEventListener('click',()=>{document.querySelectorAll('.step').forEach(x=>x.classList.remove('active'));b.classList.add('active');const d=journeyData[i],c=document.querySelector('#journey-card');c.innerHTML=`<div><p class="eyebrow">MOMENT 0${i+1}</p><h3>${d[0]}</h3></div><p>${d[1]}</p><p class="emotion">情绪：${d[2]}</p>`}));
const painData={
'肩颈':['“我在瞄准，扶手却在逼肩膀耸起。”','扶手高度、宽度与桌面冲突会把手臂重量传到肩颈；赛车椅侧翼还可能把肩向内压。','让扶手适配设备，而非只适配身体'],
'腰背':['“腰托越顶，为什么反而越痛？”','问题常不是“有没有腰托”，而是位置、曲率、强度与用户脊柱不匹配。固定枕头会制造单点压力；复杂调节若没有校准反馈，也会让用户在错误设定中持续数小时。','从“可调”升级为“可验证”'],
'臀/尾骨':['“刚坐很软，第 2 小时却只剩一个压力点。”','过硬泡棉、塌陷坐垫或张力不合的网面都会造成局部压迫。短时柔软感无法预测长时压力分布。','展示 4 小时后的压力，而非 4 分钟的手感'],
'髋/腿':['“我只是想盘腿坐，却被座边和侧翼惩罚。”','过深座面压迫膝窝，过窄侧翼限制髋部；网面硬框也可能影响收腿、斜坐等真实姿势。','为真实坐姿设计宽容区']};
document.querySelectorAll('.body-map button').forEach(b=>b.addEventListener('click',()=>{const d=painData[b.dataset.pain];document.querySelector('.pain-copy>.eyebrow').textContent='SELECTED · '+b.dataset.pain;document.querySelector('#pain-title').textContent=d[0];document.querySelector('#pain-text').textContent=d[1];document.querySelector('#pain-op').textContent=d[2]}));
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.quotes figure').forEach(q=>q.classList.toggle('hide',b.dataset.filter!=='all'&&q.dataset.cat!==b.dataset.filter))}));
const sectionLinks=[...document.querySelectorAll('.section-nav .nav-links a')];
const sections=sectionLinks.map(a=>document.querySelector(a.getAttribute('href')));
const setActiveSection=()=>{const probe=window.scrollY+180;let active=0;sections.forEach((section,i)=>{if(section&&section.offsetTop<=probe)active=i});sectionLinks.forEach((a,i)=>a.classList.toggle('active',i===active));const current=sectionLinks[active];if(current&&window.innerWidth<=800)current.scrollIntoView({block:'nearest',inline:'center'})};
window.addEventListener('scroll',setActiveSection,{passive:true});
window.addEventListener('resize',setActiveSection);
setActiveSection();
