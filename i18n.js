const T={
en:{
  nav:{home:"Home",bmi:"BMI",calories:"Calories",water:"Water",sleep:"Sleep",heart:"Heart Rate"},
  home:{title:"Your Free Health <span class='accent'>Calculators</span>",sub:"Quick, accurate health tools — no signup needed.",
    cards:[
      {icon:"⚖️",title:"BMI Calculator",desc:"Check your Body Mass Index",link:"bmi.html"},
      {icon:"🔥",title:"Calorie Calculator",desc:"Daily calorie needs",link:"calories.html"},
      {icon:"💧",title:"Water Intake",desc:"How much water you need",link:"water.html"},
      {icon:"😴",title:"Sleep Calculator",desc:"Optimal bedtime finder",link:"sleep.html"},
      {icon:"❤️",title:"Heart Rate Zones",desc:"Target training zones",link:"heart-rate.html"}
    ]},
  bmi:{title:"BMI Calculator",sub:"Calculate your Body Mass Index",height:"Height (cm)",weight:"Weight (kg)",btn:"Calculate BMI",
    cat:["Underweight","Normal","Overweight","Obese"],
    adv:["Consider increasing calorie intake with nutrient-dense foods. Consult a healthcare provider.",
         "Great job! Maintain your healthy lifestyle with balanced diet and regular exercise.",
         "Consider increasing physical activity and reducing calorie intake. Small changes add up!",
         "Please consult a healthcare provider for a personalized plan. Focus on sustainable lifestyle changes."],
    labels:["Under","Normal","Over","Obese"]},
  cal:{title:"Daily Calorie Calculator",sub:"Based on Harris-Benedict equation",age:"Age",sex:"Sex",male:"Male",female:"Female",
    height:"Height (cm)",weight:"Weight (kg)",activity:"Activity Level",
    acts:["Sedentary (little exercise)","Light (1-3 days/week)","Moderate (3-5 days/week)","Active (6-7 days/week)","Very Active (physical job)"],
    btn:"Calculate",result:"Your Daily Calorie Need",unit:"kcal/day",
    tips:"<strong>💡 Tips:</strong> To lose weight, reduce by 300-500 kcal. To gain, add 300-500 kcal. Always prioritize whole foods and balanced macros."},
  water:{title:"Water Intake Calculator",sub:"How much water should you drink daily?",weight:"Weight (kg)",btn:"Calculate",
    result:"Recommended Daily Water Intake",unit:"liters/day",
    tips:"<strong>💡 Tips:</strong> Increase intake during exercise, hot weather, or illness. Spread drinks throughout the day. Water-rich foods count too!"},
  sleep:{title:"Sleep Cycle Calculator",sub:"Based on 90-minute sleep cycles",wake:"Wake-up Time",btn:"Calculate Bedtimes",
    result:"Suggested Bedtimes",recommended:"Recommended",cycles:"cycles",
    tips:"<strong>💡 Tips:</strong> Aim for 5-6 full cycles (7.5-9h). Avoid screens 1h before bed. Keep a consistent schedule."},
  heart:{title:"Heart Rate Zone Calculator",sub:"Find your optimal training zones",age:"Age",btn:"Calculate Zones",
    max:"Max Heart Rate",zones:"Training Zones",
    fat:"Fat Burn Zone (50-70%)",aero:"Aerobic Zone (70-85%)",ana:"Anaerobic Zone (85-95%)",
    tips:"<strong>💡 Tips:</strong> Fat burn zone is ideal for beginners. Aerobic zone improves endurance. Anaerobic zone builds power — use sparingly."},
  footer:{made:"Free health tools by",tip:"☕ Buy me a coffee (ETH)"}
},
zh:{
  nav:{home:"首页",bmi:"BMI",calories:"卡路里",water:"饮水量",sleep:"睡眠",heart:"心率"},
  home:{title:"免费健康<span class='accent'>计算器</span>",sub:"快速、准确的健康工具，无需注册。",
    cards:[
      {icon:"⚖️",title:"BMI计算器",desc:"计算身体质量指数",link:"bmi.html"},
      {icon:"🔥",title:"卡路里计算器",desc:"每日热量需求",link:"calories.html"},
      {icon:"💧",title:"饮水量计算",desc:"每日建议饮水量",link:"water.html"},
      {icon:"😴",title:"睡眠计算器",desc:"最佳入睡时间",link:"sleep.html"},
      {icon:"❤️",title:"心率区间",desc:"目标训练心率",link:"heart-rate.html"}
    ]},
  bmi:{title:"BMI 计算器",sub:"计算你的身体质量指数",height:"身高 (cm)",weight:"体重 (kg)",btn:"计算BMI",
    cat:["偏瘦","正常","偏胖","肥胖"],
    adv:["建议增加营养摄入，多吃高蛋白食物。如有需要请咨询医生。",
         "太棒了！请保持均衡饮食和规律运动的健康生活方式。",
         "建议适当增加运动量，控制饮食。循序渐进效果最好！",
         "建议咨询医生制定个性化方案。关注可持续的生活方式改变。"],
    labels:["偏瘦","正常","偏胖","肥胖"]},
  cal:{title:"每日卡路里计算器",sub:"基于Harris-Benedict公式",age:"年龄",sex:"性别",male:"男",female:"女",
    height:"身高 (cm)",weight:"体重 (kg)",activity:"活动量",
    acts:["久坐不动","轻度活动 (每周1-3天)","中度活动 (每周3-5天)","高强度 (每周6-7天)","重体力劳动"],
    btn:"计算",result:"每日所需热量",unit:"千卡/天",
    tips:"<strong>💡 提示：</strong>减重每天减少300-500千卡，增重则增加300-500千卡。优先选择天然食物，保持营养均衡。"},
  water:{title:"每日饮水量计算器",sub:"你每天应该喝多少水？",weight:"体重 (kg)",btn:"计算",
    result:"建议每日饮水量",unit:"升/天",
    tips:"<strong>💡 提示：</strong>运动、高温或生病时应增加饮水。全天均匀饮水。富含水分的食物也算！"},
  sleep:{title:"睡眠周期计算器",sub:"基于90分钟睡眠周期",wake:"起床时间",btn:"计算入睡时间",
    result:"建议入睡时间",recommended:"推荐",cycles:"个周期",
    tips:"<strong>💡 提示：</strong>建议完成5-6个完整周期（7.5-9小时）。睡前1小时远离屏幕，保持规律作息。"},
  heart:{title:"心率区间计算器",sub:"找到最佳训练心率",age:"年龄",btn:"计算心率区间",
    max:"最大心率",zones:"训练区间",
    fat:"燃脂区 (50-70%)",aero:"有氧区 (70-85%)",ana:"无氧区 (85-95%)",
    tips:"<strong>💡 提示：</strong>燃脂区适合初学者，有氧区提升耐力，无氧区增强爆发力——谨慎使用。"},
  footer:{made:"免费健康工具 by",tip:"☕ 请我喝杯咖啡 (ETH)"}
},
ja:{
  nav:{home:"ホーム",bmi:"BMI",calories:"カロリー",water:"水分量",sleep:"睡眠",heart:"心拍数"},
  home:{title:"無料ヘルス<span class='accent'>計算ツール</span>",sub:"簡単・正確な健康ツール。登録不要。",
    cards:[
      {icon:"⚖️",title:"BMI計算機",desc:"体格指数を計算",link:"bmi.html"},
      {icon:"🔥",title:"カロリー計算機",desc:"1日の必要カロリー",link:"calories.html"},
      {icon:"💧",title:"水分摂取量",desc:"1日の推奨水分量",link:"water.html"},
      {icon:"😴",title:"睡眠計算機",desc:"最適な就寝時間",link:"sleep.html"},
      {icon:"❤️",title:"心拍ゾーン",desc:"目標トレーニング心拍数",link:"heart-rate.html"}
    ]},
  bmi:{title:"BMI 計算機",sub:"体格指数を計算しましょう",height:"身長 (cm)",weight:"体重 (kg)",btn:"BMIを計算",
    cat:["低体重","普通体重","過体重","肥満"],
    adv:["栄養価の高い食品で摂取カロリーを増やすことを検討してください。医師にご相談を。",
         "素晴らしい！バランスの取れた食事と定期的な運動を続けましょう。",
         "運動量を増やし、カロリーを控えめに。小さな変化が大きな結果に！",
         "医師に相談して個別プランを立てましょう。持続可能な生活習慣の改善に注力を。"],
    labels:["低体重","普通","過体重","肥満"]},
  cal:{title:"1日カロリー計算機",sub:"ハリス・ベネディクト方程式に基づく",age:"年齢",sex:"性別",male:"男性",female:"女性",
    height:"身長 (cm)",weight:"体重 (kg)",activity:"活動レベル",
    acts:["座りがち","軽い運動 (週1-3日)","中程度 (週3-5日)","活発 (週6-7日)","非常に活発 (肉体労働)"],
    btn:"計算する",result:"1日の必要カロリー",unit:"kcal/日",
    tips:"<strong>💡 ヒント：</strong>減量は300-500kcal減、増量は300-500kcal増。自然食品を優先し、バランスの取れた栄養を。"},
  water:{title:"水分摂取量計算機",sub:"1日にどれくらい水を飲むべき？",weight:"体重 (kg)",btn:"計算する",
    result:"1日の推奨水分摂取量",unit:"リットル/日",
    tips:"<strong>💡 ヒント：</strong>運動時、暑い日、体調不良時は摂取量を増やしましょう。1日を通じて均等に飲みましょう。"},
  sleep:{title:"睡眠サイクル計算機",sub:"90分の睡眠サイクルに基づく",wake:"起床時間",btn:"就寝時間を計算",
    result:"おすすめ就寝時間",recommended:"おすすめ",cycles:"サイクル",
    tips:"<strong>💡 ヒント：</strong>5-6サイクル（7.5-9時間）を目指しましょう。就寝1時間前にスクリーンオフ。規則正しい生活を。"},
  heart:{title:"心拍ゾーン計算機",sub:"最適なトレーニングゾーンを見つけよう",age:"年齢",btn:"ゾーンを計算",
    max:"最大心拍数",zones:"トレーニングゾーン",
    fat:"脂肪燃焼ゾーン (50-70%)",aero:"有酸素ゾーン (70-85%)",ana:"無酸素ゾーン (85-95%)",
    tips:"<strong>💡 ヒント：</strong>脂肪燃焼ゾーンは初心者向け。有酸素ゾーンは持久力向上。無酸素ゾーンはパワー強化——控えめに。"},
  footer:{made:"無料ヘルスツール by",tip:"☕ コーヒーをおごる (ETH)"}
}};

let lang=localStorage.getItem('hc-lang')||'en';
function setLang(l){lang=l;localStorage.setItem('hc-lang',l);render();}
function t(path){let o=T[lang];for(const k of path.split('.')){o=o?.[k]}return o||''}

function render(){
  document.querySelectorAll('.lang-sw button').forEach(b=>{b.classList.toggle('active',b.dataset.lang===lang)});
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v=t(el.dataset.i18n);if(v)el.innerHTML=v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const v=t(el.dataset.i18nPh);if(v)el.placeholder=v;
  });
  // render cards on home
  const cg=document.getElementById('card-grid');
  if(cg){
    const cards=t('home.cards');
    if(cards)cg.innerHTML=cards.map(c=>`<a href="${c.link}" class="card"><div class="icon">${c.icon}</div><h3>${c.title}</h3><p>${c.desc}</p></a>`).join('');
  }
  // render activity options
  const actSel=document.getElementById('activity');
  if(actSel){
    const acts=t('cal.acts');
    if(acts)actSel.innerHTML=acts.map((a,i)=>`<option value="${i}">${a}</option>`).join('');
  }
}
document.addEventListener('DOMContentLoaded',render);
