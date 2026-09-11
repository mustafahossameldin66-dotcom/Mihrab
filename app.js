const RAFIQ_URL='https://rafiq-quran.pages.dev/';
const dayTypeToMode={كلية:'normal','بدون كلية':'busy','ديب وورك':'normal',راحة:'rest'};
const weekdayMapEn={'السبت':'Saturday','الأحد':'Sunday','الاثنين':'Monday','الثلاثاء':'Tuesday','الأربعاء':'Wednesday','الخميس':'Thursday','الجمعة':'Friday'};
const priorityRank={core:0,important:1,optional:2};
const durationFor={pr_f:5,pr_d:5,pr_a:5,pr_m:5,pr_i:5,azkar:10,bro:15,rafiq:10,quran:20,marketing:30,anki:20,easy:10,mouth:5,skin:5,hair:10,aw:30,zad:30,taj:20,azb:60,linkedin:30,review:15};
const coreIds=new Set(['pr_f','pr_d','pr_a','pr_m','pr_i','azkar','quran','rafiq','aw','zad']);
const priorityOf=id=>coreIds.has(id)?'core':(['marketing','anki','linkedin','azb'].includes(id)?'important':'optional');
function coreCompleteNow(){const items=dayTasks(todayName());const core=items.filter(([id])=>coreIds.has(id));return core.length>0&&core.every(([id])=>!!state.today[id])}



const MARKETING = [["المرحلة الأولى: التأسيس، السيو، وفهم المريض", [["الأسبوع 1: أساسيات التسويق وأدوات 2026", ["اليوم 1 (عقلية المسوق): مشاهدة فيديو عن تعريف التسويق الحديث. | 🔍 What is Marketing basics video", "اليوم 2 (المزيج 4Ps): فهم الـ 4Ps لتطبيقها على الخدمات الطبية. | 🔍 The 4Ps of marketing mix tutorial", "اليوم 3 (التسويق الطبي): قراءة عن القيود وأخلاقيات تسويق الدواء. | 🔍 Healthcare marketing compliance", "اليوم 4 (الذكاء الاصطناعي): فيديو تطبيقي عن استخدام AI في التحليل. | 🔍 How to use AI in market research", "اليوم 5 (أبحاث السوق): استخدام AI لاستخراج بيانات عن سوق صيدلية الفيروز. | 🔍 AI prompt engineering for marketing"], ["المشروع الموحد (ساعتين ونص): تطبيق الـ 4Ps وتحليل SWOT لـ (صيدلية الفيروز). (ادرس الـ SWOT بعدين اعمل تطبيق اليوم ده)", "تحدي الأسبوع (ساعة): حلّل إعلان طبي يعجبك واستخرج رسالته التسويقية.", "تحليل منافس (نص ساعة): تصفح صفحة منافس قوي لمشروعك ولاحظ نوعية المحتوى.", "البورتفوليو (نص ساعة): خذ Screenshot لشغلك وارفعها في Notion مع شرح (المشكلة > الحل).", "اختبار (نص ساعة): اذكر 3 قيود أخلاقية لتسويق الأدوية (أضفها لـ Anki)."]], ["الأسبوع 2: رحلة العميل (Funnels)", ["اليوم 1 (شخصية العميل): استخدام قوالب Knowledge base Google Sheets لبناء Buyer Persona لمريض صيدلية الفيروز المثالي. | 🔍 How to create a buyer persona", "اليوم 2 (نموذج AIDA): مشاهدة شرح لمراحل AIDA وتأثيرها. | 🔍 AIDA model copywriting video", "اليوم 3 (قمع المبيعات): رسم قمع الـ TOFU, MOFU, BOFU. | 🔍 Marketing Funnel TOFU MOFU explained", "اليوم 4 (رحلة العميل): رسم خريطة مبسطة لمراحل رحلة مريض في صيدلية الفيروز. | 🔍 Customer journey mapping tutorial", "اليوم 5 (مقاييس الاستحواذ): حفظ معادلات الـ CAC و LTV وتطبيقاتها. | 🔍 CAC vs LTV marketing metrics"], ["المشروع الموحد (ساعتين ونص): رسم قمع مبيعات (Funnel) يجذب الزوار لصيدلية الفيروز ويحولهم لعملاء دائمين.", "تحدي الأسبوع (ساعة): ابنِ شخصية عميل (Buyer Persona) مفصلة لعميلك المستهدف.", "تحليل منافس (نص ساعة): ادخل على منصة طبية (مثل Vezeeta) وحلل كيف ينقلون المستخدم من البحث للحجز.", "البورتفوليو (نص ساعة): ارفع رسمة الـ Funnel والـ Persona ضمن ملف مشروعك.", "اختبار (نص ساعة): ما الفرق بين TOFU و BOFU؟"]], ["الأسبوع 3: تحسين محركات البحث (SEO)", ["اليوم 1 (أساسيات السيو): مشاهدة آلية عمل محركات البحث (Crawling & Indexing). | 🔍 How search engines work SEO video", "اليوم 2 (الكلمات المفتاحية): استخدام أدوات مجانية للبحث عن كلمات تخص استشارات الأدوية أونلاين. | 🔍 Keyword research medical SEO tutorial", "اليوم 3 (On-page SEO): فيديو تطبيقي لضبط عناصر الـ On-page (Title, H1). | 🔍 On-page SEO checklist guide", "اليوم 4 (Search Console): تصفح واجهة Google Search Console ومعرفة أهميتها. | 🔍 Google Search Console basics", "اليوم 5 (Local SEO): خطوات تحسين ملف Google Business Profile لصيدلية الفيروز في الأقصر. | 🔍 Google Business Profile optimization"], ["المشروع الموحد (ساعتين ونص): استخراج 5 كلمات مفتاحية وكتابة هيكل مقال طبي يجلب زيارات لصيدلية الفيروز.", "تحدي الأسبوع (ساعة): استخدم AI لاقتراح 10 أفكار مقالات، وبعدين اختار إنت 3 منها بتقييمك الشخصي.", "تحليل منافس (نص ساعة): ابحث عن مقال طبي في الطبي Altibbi ولاحظ توزيع الكلمات المفتاحية والـ H2/H3.", "البورتفوليو (نص ساعة): ارفع تقرير الكلمات المفتاحية وهيكل المقال.", "اختبار (نص ساعة): ما أهمية Google Business Profile لعيادة أو صيدلية محلية؟"]]]], ["المرحلة الثانية: صناعة المحتوى والتواجد الرقمي", [["الأسبوع 4: تسويق المحتوى وكتابة الإعلانات", ["اليوم 1 (المحتوى الطبي): أساليب تبسيط المعلومات الطبية المعقدة للمرضى. | 🔍 Medical content writing tips", "اليوم 2 (الـ Copywriting): فيديو تطبيقي لكتابة نصوص بيعية مقنعة. | 🔍 Copywriting basics for beginners video", "اليوم 3 (العناوين Hooks): التدريب على صياغة Hooks تخطف الانتباه. | 🔍 Catchy headlines hooks copywriting", "اليوم 4 (اتخاذ إجراء CTA): دراسة جمل الـ CTA المناسبة للقطاع الصحي. | 🔍 Call to action examples medical", "اليوم 5 (Canva للتصميم): جولة بصرية في Canva لتصميم قوالب طبية احترافية. | 🔍 Canva for social media marketing tutorial"], ["المشروع الموحد (ساعتين ونص): كتابة وتصميم 3 منشورات بيعية وتوعوية تُنشر على صفحة صيدلية الفيروز.", "تحدي الأسبوع (ساعة): اكتب 5 Hooks قوية لإعلان يروج لخدمة داخل الصيدلية.", "تحليل منافس (نص ساعة): راجع حسابات Eva Pharma وحلل طريقة صياغتهم للمحتوى ليكون جذاباً للمرضى.", "البورتفوليو (نص ساعة): ارفع التصميمات والنصوص (Copy).", "اختبار (نص ساعة): ما هو الـ Hook ولماذا هو الأهم في أي إعلان تسويقي؟"]], ["الأسبوع 5: منصات التواصل الاجتماعي", ["اليوم 1 (الخوارزميات): فيديو حديث يشرح خوارزميات Meta و TikTok. | 🔍 Social media algorithms update 2026", "اليوم 2 (التسويق B2B): جولة في LinkedIn لفهم كيفية بناء علاقات مع الأطباء. | 🔍 LinkedIn Marketing B2B tutorial", "اليوم 3 (الفيديوهات القصيرة): صياغة سكربت Reels سريع الإيقاع. | 🔍 Short form video marketing strategy", "اليوم 4 (تقويم المحتوى): فيديو تطبيقي لإنشاء Content Calendar. | 🔍 Social media content calendar setup", "اليوم 5 (إدارة المجتمعات): كيفية الرد الدبلوماسي على التقييمات الطبية السلبية. | 🔍 Community management handling negative reviews"], ["المشروع الموحد (ساعتين ونص): إعداد Content Calendar متكامل لمدة شهر خاص بصفحة صيدلية الفيروز.", "تحدي الأسبوع (ساعة): صمم سيناريو جاهز (Template) للرد على أزمة لمريض يشتكي من خدمة طبية.", "تحليل منافس (نص ساعة): راجع صفحة Jamjoom Pharma أو شركة مشابهة على LinkedIn ولاحظ المحتوى الـ B2B.", "البورتفوليو (نص ساعة): ارفع الـ Content Calendar بصيغة PDF.", "اختبار (نص ساعة): كيف توازن بين المحتوى التعليمي والبيعي في خطة الشهر؟"]]]], ["المرحلة الثالثة: الإعلانات المدفوعة والاختبارات", [["الأسبوع 6: إعلانات Meta و A/B Testing", ["اليوم 1 (سياسات الإعلانات): دراسة صارمة لسياسات Meta الخاصة بصحة الإنسان لتجنب الحظر. | 🔍 Meta Ads healthcare policies guide", "اليوم 2 (هيكل الحملة): فيديو يشرح واجهة مدير الإعلانات (Campaign > Ad Set > Ad). | 🔍 Facebook ads manager tutorial 2026", "اليوم 3 (A/B Testing): كيف تبرمج منصة الإعلانات لاختبار عنوانين مختلفين. | 🔍 A/B testing in Meta Ads setup", "اليوم 4 (التتبع والمقاييس): فهم دور الـ Conversions API ومعادلة ROAS. | 🔍 Meta Conversions API vs Pixel explained", "اليوم 5 (إطلاق الإعلان): ربط بطاقة الدفع وتجهيز الحملة الحقيقية لصيدلية الفيروز. | 🔍 How to launch first Facebook ad"], ["المشروع الموحد (ساعتين ونص): إطلاق حملة تفاعل حقيقية (بميزانية 100-300 جنيه) لمحتوى توعوي خاص بصيدليتك ومراقبة أرقامها.", "تحدي الأسبوع (ساعة): صمم خطة A/B Test (صورتين مختلفتين وعنوانين) للحملة قبل إطلاقها.", "تحليل منافس (نص ساعة): استخدم Meta Ad Library للبحث عن إعلانات منافسيك المباشرين وحللها.", "البورتفوليو (نص ساعة): ارفع لقطات شاشة (Screenshots) توثق إعدادك للحملة ونتائجها الأولية.", "اختبار (نص ساعة): ما الذي قد يسبب إغلاق حسابك الإعلاني فوراً في المجال الطبي؟"]], ["الأسبوع 7: إعلانات Google وتحسين التحويل (CRO)", ["اليوم 1 (Search Campaigns): فيديو يشرح واجهة إعلانات بحث جوجل (Google Ads). | 🔍 Google Search Ads tutorial", "اليوم 2 (Keyword Match): فهم دقيق لأنواع المطابقة (Broad, Phrase, Exact). | 🔍 Google Ads Keyword Match Types", "اليوم 3 (Quality Score): كيف تقلل تكلفة النقرة عبر تحسين نقاط الجودة. | 🔍 Google Ads Quality Score explained", "اليوم 4 (Landing Pages): فيديو يستعرض أفضل ممارسات صفحات الهبوط الطبية. | 🔍 Medical landing page UX breakdown", "اليوم 5 (Lead Magnets): التخطيط لمغناطيس إيميلات يجذب جمهور صيدلية الفيروز. | 🔍 Healthcare lead magnet ideas"], ["المشروع الموحد (ساعتين ونص): تخطيط حملة بحث (Search Campaign) على جوجل لاستقطاب كلمات مفتاحية للصيدلية (مثل: استشارة دوائية أونلاين).", "تحدي الأسبوع (ساعة): ارسم هيكل ورقي (Wireframe) لصفحة هبوط مخصصة لاستقبال الزيارات من إعلان جوجل.", "تحليل منافس (نص ساعة): ابحث على جوجل عن خدمة طبية وحلل الإعلان (Ad) المتصدر في نتائج البحث.", "البورتفوليو (نص ساعة): ارفع خطة الكلمات المفتاحية وهيكل صفحة الهبوط.", "اختبار (نص ساعة): متى نستخدم Phrase Match بدلاً من Exact Match؟"]], ["الأسبوع 8: التحليلات وقراءة البيانات (Data Analytics)", ["اليوم 1 (تحليلات جوجل): استكشاف واجهة GA4 وفهم تقارير مصادر الزيارات. | 🔍 Google Analytics 4 dashboard tour", "اليوم 2 (التتبع الدقيق): فيديو يشرح إنشاء وتتبع الـ UTM Parameters. | 🔍 How to use UTM parameters tracking", "اليوم 3 (مقاييس الأداء): فهم مدلول الـ Bounce Rate ومقاييس التفاعل. | 🔍 GA4 engagement metrics explained", "اليوم 4 (Looker Studio): مشاهدة بناء لوحة تقارير (Dashboard) من الصفر. | 🔍 Looker Studio tutorial basics", "اليوم 5 (قراءة التقارير): جلب بيانات حملة Meta الفعلية (من الأسبوع 6) لتحليلها. | 🔍 How to analyze marketing campaign data"], ["المشروع الموحد (ساعتين ونص): تحليل الأرقام الحقيقية لحملتك السابقة، واستخراج 3 رؤى (Insights) لتحسين الحملة القادمة لصيدلية الفيروز.", "تحدي الأسبوع (ساعة): أنشئ روابط متتبعة (UTM Links) لمنشورات الصيدلية، وارسم Dashboard بسيط للتقارير.", "تحليل منافس (نص ساعة): ابحث عن دراسة حالة (Case Study) لنجاح حملة تسويق طبي ولاحظ مقاييس النجاح المستخدمة.", "البورتفوليو (نص ساعة): ارفع تقرير تحليلك للحملة (الأرقام والدروس المستفادة).", "اختبار (نص ساعة): لماذا يفضل استخدام UTM Parameters دائماً في الإعلانات؟"]]]], ["المرحلة الرابعة: الاستراتيجية والانطلاق لسوق العمل", [["الأسبوع 9: الاستراتيجية الشاملة والتسويق المتخصص", ["اليوم 1 (B2B Medical): أساليب الـ Medical Detailing لاستهداف الأطباء. | 🔍 Medical sales representative skills", "اليوم 2 (الخطة الشاملة): فيديو يوضح كيفية دمج جميع قنوات التسويق معاً. | 🔍 Digital Marketing Strategy framework", "اليوم 3 (الأهداف الذكية): التدرب على صياغة أهداف بنموذج SMART لصيدلية الفيروز. | 🔍 SMART goals marketing examples", "اليوم 4 (مؤشرات KPIs): تحديد الـ KPIs الأساسية لمراقبة الخطة. | 🔍 Key Performance Indicators tracking", "اليوم 5 (توزيع الميزانية): أسس التخطيط المالي وتوزيع الميزانية على المنصات. | 🔍 Marketing budget allocation strategy"], ["المشروع الموحد (ساعتين ونص): كتابة أهداف SMART، وتوزيع ميزانية ربع سنوية لصيدلية الفيروز على مختلف قنوات التسويق.", "تحدي الأسبوع (ساعة): صمم هيكل عرض تقديمي (Pitch Deck) لتقنع مستثمر بتمويل الخطة التسويقية للصيدلية.", "تحليل منافس (نص ساعة): حلل استراتيجية مركز طبي كبير ولاحظ كيف يربط محتوى منصاته ببعضها.", "البورتفوليو (نص ساعة): ارفع استراتيجية الميزانية وأهداف الـ SMART.", "اختبار (نص ساعة): ما هي الشروط الخمسة لكتابة هدف ذكي (SMART)؟"]], ["الأسبوع 10: دراسة الحالة النهائية والانطلاق لسوق العمل 🚀", ["اليوم 1 (الـ Portfolio): تجميع كافة مخرجات الأسابيع الـ 9 في دراسة حالة (Case Study) واحدة ضخمة تروي قصة بناء وتسويق صيدلية الفيروز من الصفر.", "اليوم 2 (الشهادات): استكمال وإنهاء مسار الشهادة الموازي (HubSpot/Google) - المفروض تكون قربت تخلص بما إنه كان بيمشي جنب الخطة من الأول.", "اليوم 3 (LinkedIn): كتابة السيرة الذاتية لتعكس خبرتك المزدوجة، وإنشاء حساب لينكد إن احترافي، ونشر الـ Case Study الخاصة بك.", "اليوم 4 (المقابلات): التحضير لأسئلة مقابلات التسويق الطبي، وتجهيز رسالة تغطية (Cover Letter) مخصصة.", "اليوم 5 (التقديم): التقديم الفعلي والمركز على 10-20 فرصة عمل حر أو Internship ذات جودة عالية."], ["تحدي التخرج (5 ساعات): افتح Anki، قُم بتفريغ ومراجعة كافة البطاقات المتراكمة لترسيخ المفاهيم التي ستواجهك في المقابلات الوظيفية، ثم تأكد من أن الـ Portfolio الخاص بك يعمل بشكل مثالي كـ Link للمشاركة.", "اليوم 7: أغلق اللاب توب، احتفل بهذا الإنجاز الضخم، واستعد لاستقبال أول عميل! 🎉"]]]]];
const PRIORITY = ["⭐⭐⭐ لازم يتحفظ: 4Ps، STP، SWOT، AIDA، Marketing Funnel (TOFU/MOFU/BOFU)، Buyer Persona، USP، CTA، SEO (On-page / Off-page / Technical)، CAC، LTV، CTR، CPC، CPM، ROAS، Conversion Rate، UTM، SMART، KPIs.", "⭐⭐ يتفهم ويتطبق: تعريف AMA، تاريخ التسويق، Marketing 1.0/2.0/3.0/5.0، قصة التطور، أمثلة الشركات.", "⭐ يُرجع إليه عند الحاجة: الإحصائيات، الدراسات، والأمثلة الطويلة."];
const DAYS=['السبت','الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة'];
const JS_WEEKDAY_AR=['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
const NAV=[['home','⌂','مركز اليوم','Today'],['marketing','↗','التسويق','Marketing'],['shari','✦','العلم الشرعي','Islamic Studies'],['quran','☾','القرآن','Qur’an'],['courses','▣','الكورسات','Courses'],['system','◌','النظام','System']];
const SHARI_MAP={'السبت':'زاد (تفريغ) + أحمد السيد + أيمن عبد الرحيم','الأحد':'زاد (تفريغ) + فقه النفس + السرجاني','الاثنين':'زاد (تفريغ) + أحمد السيد + أيمن عبد الرحيم','الثلاثاء':'زاد (تفريغ) + فقه النفس + السرجاني','الأربعاء':'زاد (تفريغ) + أحمد السيد + أيمن عبد الرحيم','الخميس':'زاد (تفريغ) + فقه النفس + السرجاني','الجمعة':'زاد (3 محاضرات) + تدبر (أحمد عبد المنعم)'};
const AWARENESS=[1,2,3,4,5,6,7,8,9];
const OLD_KEY='dersh-integrated-v4';
const KEY='study-dashboard-focus-v7';
let state={theme:'mono',lang:'ar',view:'home',dayType:'كلية',todayDate:'',today:{},plan:{},weekly:{marketingHours:0,mckinsey:false,dose:false,review:false,rating:'',cert:false},weekDayTypes:{},quranFrameOpen:false,mode:'normal',modeDate:'',schemaVersion:3,settings:{lowPower:false},inbox:[],library:[],backupAt:'',metrics:{focusMinutes:0,sessions:0},history:{}};
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function effectiveDate(){const d=new Date();if(d.getHours()<5)d.setDate(d.getDate()-1);return d}
function keyDate(){return effectiveDate().toLocaleDateString('en-CA')}
/* Append-only daily history (spec 45–53): committed exactly once, when the day that just ended
   rolls over — never rewritten afterward. Gaps (app not opened that day) are left absent, not
   fabricated as failures, per "never fabricate historical data". */
function commitDaySnapshot(dateKey,todayState,dayName){
  const items=dayTasks(dayName); const core=items.filter(([id])=>coreIds.has(id));
  const coreDone=core.filter(([id])=>!!todayState[id]).length;
  const allDone=items.filter(([id])=>!!todayState[id]).length;
  state.history[dateKey]={coreDone,coreTotal:core.length,allDone,allTotal:items.length,coreComplete:core.length>0&&coreDone===core.length};
}
function resetDay(){
  const k=keyDate();
  if(state.todayDate!==k){
    if(state.todayDate){ // skip on very first-ever load — there's no prior day to record
      const prevDayName=JS_WEEKDAY_AR[new Date(state.todayDate+'T12:00:00').getDay()];
      commitDaySnapshot(state.todayDate,state.today,prevDayName);
    }
    state.todayDate=k; state.today={}; save();
  }
}
function liveTodayRecord(){
  const items=dayTasks(todayName()); const core=items.filter(([id])=>coreIds.has(id));
  const coreDone=core.filter(([id])=>!!state.today[id]).length;
  const allDone=items.filter(([id])=>!!state.today[id]).length;
  return {coreDone,coreTotal:core.length,allDone,allTotal:items.length,coreComplete:core.length>0&&coreDone===core.length};
}
function computeStreak(){
  let streak=coreCompleteNow()?1:0;
  const today=effectiveDate();
  for(let i=1;i<400;i++){
    const d=new Date(today); d.setDate(d.getDate()-i);
    const rec=state.history[d.toLocaleDateString('en-CA')];
    if(rec&&rec.coreComplete) streak++; else break;
  }
  return streak;
}
function computeBestStreak(){ // not yet surfaced in the UI — held for Phase 5's achievement view
  const dates=Object.keys(state.history).sort();
  let best=0,cur=0,prevKey=null;
  for(const dk of dates){
    if(state.history[dk].coreComplete){
      const diff=prevKey?Math.round((new Date(dk+'T12:00:00')-new Date(prevKey+'T12:00:00'))/86400000):1;
      cur=diff===1?cur+1:1; best=Math.max(best,cur); prevKey=dk;
    } else { cur=0; prevKey=null; }
  }
  return Math.max(best,computeStreak());
}
function weekBounds(){ // Arabic week starts Saturday (DAYS[0])
  const today=effectiveDate(); const idx=DAYS.indexOf(JS_WEEKDAY_AR[today.getDay()]);
  const start=new Date(today); start.setDate(start.getDate()-idx); return start;
}
// Generic period rollup (spec 46–47): every week/month/year/all-time number below is this same
// function applied to a different date range — one implementation, not four parallel ones.
function periodSummary(startDate,endDate){
  const todayKey=keyDate(), endKey=endDate.toLocaleDateString('en-CA'); const cursor=new Date(startDate);
  let elapsed=0,activeDays=0,doneDays=0;
  while(true){
    const k=cursor.toLocaleDateString('en-CA');
    if(k>endKey||k>todayKey) break; // compare date-keys, not Date magnitudes — a Date carries today's
    elapsed++;                      // real clock time while cursor sits at a fixed time-of-day, so a
    const rec=(k===todayKey)?liveTodayRecord():state.history[k]; // magnitude compare could drop "today"
    if(rec){ if(rec.allDone>0) activeDays++; if(rec.coreComplete) doneDays++; }             // before noon
    cursor.setDate(cursor.getDate()+1);
  }
  return {elapsed,activeDays,doneDays,pct:elapsed?Math.round(doneDays/elapsed*100):0};
}
function weekSummary(){ const start=weekBounds(); const end=new Date(start); end.setDate(end.getDate()+6); return periodSummary(start,end); }
function monthBounds(){ const t=effectiveDate(); return {start:new Date(t.getFullYear(),t.getMonth(),1),end:new Date(t.getFullYear(),t.getMonth()+1,0)}; }
function monthSummary(){ const {start,end}=monthBounds(); return periodSummary(start,end); }
function yearBounds(){ const t=effectiveDate(); return {start:new Date(t.getFullYear(),0,1),end:new Date(t.getFullYear(),11,31)}; }
function yearSummary(){ const {start,end}=yearBounds(); return periodSummary(start,end); }
function firstTrackedKey(){ const keys=Object.keys(state.history).sort(); return keys.length?keys[0]:keyDate(); }
function allTimeSummary(){ const first=firstTrackedKey(); return {...periodSummary(new Date(first+'T12:00:00'),effectiveDate()),firstDate:first}; }
function monthlyBreakdown(){ // one row per calendar month from the first tracked day through the current month
  const first=firstTrackedKey(); const firstD=new Date(first+'T12:00:00'), now=effectiveDate();
  const out=[]; let y=firstD.getFullYear(), m=firstD.getMonth();
  while(y<now.getFullYear()||(y===now.getFullYear()&&m<=now.getMonth())){
    const start=new Date(y,m,1), end=new Date(y,m+1,0);
    out.push({ym:`${y}-${String(m+1).padStart(2,'0')}`,...periodSummary(start,end)});
    m++; if(m>11){m=0;y++;}
  }
  return out;
}
function strongestWeakestMonth(){ // never fabricated: only considers months with real recorded activity (spec 46)
  const rows=monthlyBreakdown().filter(r=>r.activeDays>0);
  if(!rows.length) return {strongest:null,weakest:null};
  let strongest=rows[0],weakest=rows[0];
  for(const r of rows){ if(r.pct>strongest.pct) strongest=r; if(r.pct<weakest.pct) weakest=r; }
  return {strongest,weakest};
}
function monthHeatmapCells(){ // restrained activity heatmap for the current calendar month (spec 48)
  const t=effectiveDate(), y=t.getFullYear(), m=t.getMonth();
  const daysInMonth=new Date(y,m+1,0).getDate(), todayKey=keyDate();
  let cells='';
  for(let day=1;day<=daysInMonth;day++){
    const k=new Date(y,m,day).toLocaleDateString('en-CA');
    let cls='hm-future';
    if(k<=todayKey){
      const rec=(k===todayKey)?liveTodayRecord():state.history[k];
      cls=rec?(rec.coreComplete?'hm-done':(rec.allDone>0?'hm-active':'hm-empty')):'hm-empty';
    }
    cells+=`<span class="hm-cell ${cls}" title="${esc(k)}"></span>`;
  }
  return cells;
}
function todayName(){return JS_WEEKDAY_AR[effectiveDate().getDay()]}
function todayDayType(){return state.weekDayTypes[todayName()]||state.dayType||'كلية'}
function marketingTarget(){const t=todayDayType();return t==='كلية'?'45–60 دقيقة':t==='بدون كلية'?'2–2.5 ساعة':'3.5–4 ساعات'}
function localDaySerial(){const d=new Date();return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000)}
function idFor(prefix,text){let h=0,raw=prefix+'|'+text;for(let i=0;i<raw.length;i++)h=(h*31+raw.charCodeAt(i))>>>0;return prefix+'_'+h.toString(36)}
function pct(items,store){const n=items.filter(x=>store[x]).length;return {n,total:items.length,p:items.length?Math.round(n/items.length*100):0}}
function tChecked(id){return !!state.today[id]}
function pChecked(id){return !!state.plan[id]}
function taskBadge(id){
 const spirit=['pr_f','pr_d','pr_a','pr_m','pr_i','azkar','bro','rafiq','quran','aw','zad','taj'];
 const impact=['marketing','anki','azb','linkedin','review'];
 if(id==='marketing') return state.lang==='en'?['Independence','wealth']:['استقلال','wealth'];
 if(spirit.includes(id)) return state.lang==='en'?['Core','spirit']:['ورد','spirit'];
 if(impact.includes(id)) return state.lang==='en'?['Impact','impact']:['أثر','impact'];
 return null;
}
const TASK_EN={
 pr_f:'Fajr — on time',pr_d:'Dhuhr — on time',pr_a:'Asr — on time',pr_m:'Maghrib — on time',pr_i:'Isha — on time',
 azkar:'Morning/evening adhkar + du‘a for family and the deceased',bro:'Brother’s wird — Qur’an / night prayer / adhkar',rafiq:'Rafiq Qur’an project',quran:'Qur’an review — prayer room between lectures/sections or during transit',
 marketing:'Marketing — '+marketingTarget(),anki:'Anki — due reviews first; new cards within budget',easy:'EasyPeasy Way to Quit — today’s reading',mouth:'Oral-care routine — morning & evening',skin:'Skincare routine — morning & evening',hair:'Hair routine — according to your routine',
 aw:'Building the Contemporary Muslim’s Awareness — today’s session',taj:'Tajweed — video',azb:'Al-Azbi training transcription into Anki — ~1 hour',linkedin:'Weekly LinkedIn post',review:'Weekly review — 10–15 minutes'
};
function taskHTML(items){return '<div class="tasks">'+items.map(([id,text])=>{const done=tChecked(id);const badge=taskBadge(id);const label=(state.lang==='en'&&TASK_EN[id])?TASK_EN[id]:text;return `<div class="task-item ${done?'done':''}" data-task-id="${esc(id)}"><input type="checkbox" id="task_${esc(id)}" ${done?'checked':''} onchange="toggleToday('${esc(id)}')"><label class="task-text" for="task_${esc(id)}">${esc(label)}</label>${badge?`<span class="mihrab-badge badge-${badge[1]}">${esc(badge[0])}</span>`:''}</div>`}).join('')+'</div>'}
// Zad Academy runs on the Sharia day, not the app's 5am-cutoff calendar day: a Sharia day begins at
// that evening's Maghreb. We don't calculate real Maghreb times, so we use the Maghreb prayer checkbox
// (pr_m) — already logged by the user every day — as the real-world signal that Maghreb has passed.
// Once it's checked, Zad content rolls forward to the next named day (Thursday → Friday's 3 lectures,
// Friday → Saturday's single lecture), even though the app's own "day" doesn't flip until 5am.
function zadDay(day){return (state.today&&state.today.pr_m)?DAYS[(DAYS.indexOf(day)+1)%DAYS.length]:day}
function zadTaskEntry(day){
 const en=state.lang==='en', isFriday=zadDay(day)==='الجمعة';
 const text=isFriday
  ?(en?'🎓 Zad Academy — 3 lectures (Friday)':'🎓 أكاديمية زاد — 3 محاضرات (الجمعة)')
  :(en?'🎓 Zad Academy — today’s lecture':'🎓 أكاديمية زاد — محاضرة اليوم');
 return ['zad',text]
}
function dayTasks(day){
 const base=[['pr_f','🕌 الفجر — في وقتها'],['pr_d','🕌 الظهر — في وقتها'],['pr_a','🕌 العصر — في وقتها'],['pr_m','🕌 المغرب — في وقتها'],['pr_i','🕌 العشاء — في وقتها'],['azkar','📿 أذكار الصباح والمساء + الدعاء للأهل والأموات'],['bro','🤲 ورد أخي — قرآن / قيام / أذكار'],['rafiq','✨ مشروع رفيق القرآن'],['quran','📖 مراجعة القرآن — المصلى بين المحاضرات/السكاشن أو المواصلات'],['marketing','💻 التسويق — '+marketingTarget()],['anki','🧠 Anki — المستحق أولًا، والجديد حسب الميزانية'],['easy','📗 EasyPeasy Way to Quit — قراءة اليوم'],['mouth','🪥 روتين الفم — صباحًا ومساءً'],['skin','🧴 روتين البشرة — صباحًا ومساءً'],['hair','💆 روتين الشعر — حسب روتينك']];
 const extra={'السبت':[['aw','🧭 تأسيس وعي المسلم المعاصر — جلسة اليوم']], 'الأحد':[['taj','🎙️ التجويد (فيديو)'],['azb','📝 تفريغ تدريب العزبي في Anki — ~ساعة'],['linkedin','📝 بوست LinkedIn الأسبوعي']], 'الاثنين':[['aw','🧭 تأسيس وعي المسلم المعاصر — جلسة اليوم']], 'الثلاثاء':[['taj','🎙️ التجويد (فيديو)'],['azb','📝 تفريغ تدريب العزبي في Anki — ~ساعة']], 'الأربعاء':[['aw','🧭 تأسيس وعي المسلم المعاصر — جلسة اليوم']], 'الخميس':[['taj','🎙️ التجويد (فيديو)'],['azb','📝 تفريغ تدريب العزبي في Anki — ~ساعة']], 'الجمعة':[['aw','🧭 تأسيس وعي المسلم المعاصر — حصة أطول'],['review','🔍 المراجعة الأسبوعية — 10–15 دقيقة ليلاً']]};
 return base.concat(extra[day]||[]).concat([zadTaskEntry(day)])
}
function shariItems(day){if(day==='الجمعة')return [['sz1','زاد — محاضرة 1'],['sz2','زاد — محاضرة 2'],['sz3','زاد — محاضرة 3'],['st','تدبر — أحمد عبد المنعم']];const raw=SHARI_MAP[day]||'';const arr=raw.replace(/^زاد \(تفريغ\) \+ /,'').split(' + ');return [['z','زاد — محاضرة اليوم'],['s2',arr[0]||'المصدر الثاني'],['s3',arr[1]||'المصدر الثالث']]}
function applyLanguage(){document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==='en'?'ltr':'rtl';document.body.dataset.lang=state.lang;document.body.dataset.theme=state.theme;document.documentElement.style.colorScheme=state.theme==='paper'?'light':'dark';const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=getComputedStyle(document.body).getPropertyValue('--bg').trim()||'#0b0f12';const tag=document.getElementById('brandTagline');if(tag)tag.textContent=state.lang==='en'?'Build yourself. Create impact. Earn independence.':'بناء النفس، وصناعة الأثر، وتحقيق الاستقلال.';}
const I18N={
'Mihrab':'Mihrab',
'بناء النفس، وصناعة الأثر، وتحقيق الاستقلال.':'Build yourself. Create impact. Earn independence.',

'لوحة واحدة':'One dashboard','Mihrab':'Mihrab','مركز اليوم':'Today','التسويق':'Marketing','العلم الشرعي':'Islamic Studies','القرآن':'Qur’an','الكورسات':'Courses','النظام':'System',
'رتّب يومك.':'Shape your day.','وابنِ مستقبلك بهدوء.':'Build your future calmly.','وخليه بسيط.':'Keep it simple.','باقي':'Remaining','بنود باقية':'items left','خلصت يومك':'You are done for today','الأساسيات أولًا.':'Essentials first.','بعدها':'Next','قاعدة اليوم':'Today’s rule','مهمة التسويق':'Marketing task','محتوى الشرعي':'Islamic content','بدّل بين العربية والإنجليزية في أي وقت.':'Switch between Arabic and English at any time.','جميل':'Beautiful','مركز واحد لكل ما تحتاجه اليوم: الأساسيات الدينية والقرآن، ثم التسويق كأولوية مهنية، والكورسات المساندة بدون ما تتحول اللوحة نفسها إلى عبء.':'One place for today: faith, Qur’an, professional marketing, and supporting courses — without turning the board into another burden.',
'إنجاز اليوم':'Today’s progress','جرعة التسويق اليوم':'Today’s marketing dose','ابدأ تنفيذ اليوم ↓':'Start today ↓','الخطة المهنية ↗':'Career plan ↗','الشرعي ↗':'Islamic plan ↗','أسبوعك في لقطة':'Your week at a glance','اختار نوع كل يوم مرة واحدة من النظام، واللوحة تستخدمه تلقائيًا.':'Set each day type once in System, and the board uses it automatically.','تنفيذ اليوم':'Today’s execution','لا تعويض اندفاعي.':'No catch-up sprint.','الأساسيات أولًا':'Essentials first','قائمة اليوم':'Today’s list','ماذا بعد؟':'What’s next?','افتح مهمة التسويق التفصيلية':'Open detailed marketing task','افتح محتوى اليوم الشرعي':'Open today’s Islamic content','افتح مراجعة القرآن + رفيق':'Open Qur’an review + Rafiq','ثلاث قواعد':'Three rules','المراجعات قبل الجديد':'Reviews before new cards','الشرعي والقرآن لا يُقصّان':'Islamic studies + Qur’an stay protected','McKinsey + Dose أول ما يتقلص':'McKinsey + Dose shrink first',
'التسويق هذا الأسبوع':'Marketing this week','هدف الأسبوع':'Weekly target','الشرعي':'Islamic studies','مراجعة':'Review','مساندة لا تسبق الأساسيات.':'Support work never outranks essentials.','الأساسيات الدينية والقرآن، ثم التسويق كأولوية مهنية، والكورسات المساندة':'faith and Qur’an first, then professional marketing and supporting courses','كل يوم مرة واحدة':'once for each day','المراجعة المستحقة أولًا':'Due reviews first','الجديد حسب الميزانية':'New cards within budget','في وقتها':'On time','أذكار الصباح والمساء + الدعاء للأهل والأموات':'Morning/evening adhkar + supplication for family and the deceased','ورد أخي — قرآن / قيام / أذكار':'Brother’s wird — Qur’an / night prayer / adhkar','مراجعة القرآن':'Qur’an review','المصلى بين المحاضرات/السكاشن أو المواصلات':'prayer room between lectures/sections or during transit','قراءة اليوم':'Today’s reading','روتين الفم — صباحًا ومساءً':'Oral-care routine — morning & evening','روتين البشرة — صباحًا ومساءً':'Skincare routine — morning & evening','روتين الشعر — حسب روتينك':'Hair routine — according to your routine',
'معسكر التسويق الطبي الرقمي':'Digital Medical Marketing Bootcamp','أولوية مهنية':'Professional priority','طريقة اليوم':'Daily method','Buffer Rule':'Buffer Rule','التقدم الكلي':'Overall progress','تقدم الأسبوع':'Weekly progress','أيام التعلم':'Learning days','التطبيق العميق':'Deep application','نظام Anki داخل المعسكر':'Anki system in the bootcamp','بوابة إنشاء البطاقة':'Card creation gate','معيار نجاح المشروع':'Project success criterion','بعد الأسبوع 10':'After week 10','مؤجل إلى ما بعد معسكر التسويق.':'Deferred until after the marketing bootcamp.',
'مسار مستقل وثابت. لا يدخل في منافسة مع التسويق.':'A fixed, independent track. It does not compete with marketing.','أساسي':'Core','المصادر الأساسية':'Core sources','ترتيب المسارات':'Track order','تنفيذ اليوم الشرعي':'Today’s Islamic execution','تأسيس وعي المسلم المعاصر':'Building the Contemporary Muslim’s Awareness','هدف الدورة':'Course goal','مكانها في الخطة':'Place in the plan','المحاضرة':'Lecture','من 9':'of 9','تنبيه':'Note','الجمعه':'Friday','جلسة أطول + تدبر':'Longer session + reflection',
'مساحة مراجعة هادئة':'A quiet review space','لا حفظ جديد أثناء الدراسة؛ الاتصال بالمحفوظ هو الهدف.':'No new memorization during university; staying connected to what you memorized is the goal.','مراجعة اليوم':'Today’s review','رفيق القرآن داخل نفس التجربة':'Rafiq inside the same experience','الوصول إلى رفيق القرآن من هنا، بدون ما تحوّل اللوحة إلى نسخة منه.':'Access Rafiq from here without turning this board into a copy of it.',
'الكورسات والأنظمة المساندة':'Courses & supporting systems','المراجعة المستحقة أولًا. الجديد بميزانية ثابتة. أماكنه المفضلة: المواصلات، المصلى، والفواصل.':'Due reviews first. New cards stay within a fixed budget. Best moments: transit, prayer room, and gaps.','حوالي ساعتين أسبوعيًا. أول ما ينكمش عند ضغط الدراسة.':'About two hours weekly. One of the first things to shrink under pressure.','أنجزت نصيب الأسبوع':'Finished this week’s share','بالتوازي مع المعسكر':'Alongside the bootcamp','أنجزت نصيب الشهادة الموازية':'Finished this week’s parallel certificate share','يظل موجودًا كقراءة خفيفة داخل اليوم، ولا يضخم الخطة الرئيسية.':'Keep it as light daily reading without bloating the main plan.','الأنظمة المساندة':'Supporting systems',
'النظام والمراجعة':'System & review','هنا تضبط طريقة تشغيل اللوحة بدل ما تغيّر الخطة نفسها.':'Tune how the board runs here without changing the plan itself.','شكل اللوحة':'Board appearance','الثيم يغيّر الخلفية، البطاقات، الحواف، الظلال، الإضاءة وطابع الواجهة — مش مجرد لون زر.':'The theme changes the background, cards, borders, shadows, glow, and overall feel — not just a button color.','نوع كل يوم':'Day type','يحدد جرعة التسويق لذلك اليوم':'Sets that day’s marketing dose','تشغيل':'On','المرجع':'Reference','التقييم الأسبوعي':'Weekly review','اختار تقييمك الحقيقي للأسبوع — الاختيار بيتحفظ ويُعتبر المراجعة الأسبوعية منجزة.':'Choose your real weekly rating — it saves and counts as the weekly review.','محفوظ':'Saved','لم يُقيَّم':'Not rated','مراجعة أسبوعية':'Weekly review','الساعات':'Hours','أدخل الساعات الفعلية':'Enter actual hours','أوضاع الطاقة':'Energy modes','قواعد التشغيل':'Operating rules',
'السبت':'Saturday','الأحد':'Sunday','الاثنين':'Monday','الثلاثاء':'Tuesday','الأربعاء':'Wednesday','الخميس':'Thursday','الجمعة':'Friday',
'كلية':'College','بدون كلية':'No college','ديب وورك':'Deep work','راحة':'Rest','غير محدد':'Not set','ممتاز':'Excellent','جيد جدًا':'Very good','متذبذب':'Unstable','أسبوع طوارئ':'Emergency week','80–90%+ والتقدم ثابت':'80–90%+ and steady progress','ماشي كويس مع شوية تعثر':'Going well with some friction','فيه حاجة محتاجة تعديل':'Something needs adjustment','الأولوية كانت للضروريات':'Essentials had priority',
'ملاحظة الدورة':'Course note','Module':'Module',
'✨ مشروع رفيق القرآن':'✨ Rafiq Qur’an project','📖 مراجعة القرآن — المصلى بين المحاضرات/السكاشن أو المواصلات':'📖 Qur’an review — prayer room between lectures/sections or transit',
'زاد (تفريغ) + أحمد السيد + أيمن عبد الرحيم':'ZAD (notes) + Ahmed Al-Sayed + Ayman Abdel Rahim','زاد (تفريغ) + فقه النفس + السرجاني':'ZAD (notes) + Fiqh al-Nafs + Al-Sarjani','زاد (3 محاضرات) + تدبر (أحمد عبد المنعم)':'ZAD (3 lectures) + reflection (Ahmed Abdel Moneim)','حوالي 70–85 دقيقة':'About 70–85 minutes','جلسة أطول + تدبر':'Longer session + reflection','تدبر':'Reflection','فقه النفس':'Fiqh al-Nafs','السرجاني':'Al-Sarjani','أحمد السيد':'Ahmed Al-Sayed','أيمن عبد الرحيم':'Ayman Abdel Rahim','زاد':'ZAD','أحمد عبد المنعم':'Ahmed Abdel Moneim','مصادر أساسية':'Core sources','المسارات اللاحقة':'Later tracks','الجمعة':'Friday','التسويق الطبي الرقمي':'Digital medical marketing','العلم الشرعي':'Islamic studies','القرآن':'Qur’an','الكورسات':'Courses','النظام':'System',
}
function translateText(t){let s=t;const exact=I18N[s.trim()];if(exact)return exact;return s
 .replaceAll('السبت','Saturday').replaceAll('الأحد','Sunday').replaceAll('الاثنين','Monday').replaceAll('الثلاثاء','Tuesday').replaceAll('الأربعاء','Wednesday').replaceAll('الخميس','Thursday').replaceAll('الجمعة','Friday')
 .replaceAll('اليوم','Today').replaceAll('الأسبوع','Week').replaceAll('المحاضرات','lectures').replaceAll('محاضرة','lecture')
 .replaceAll('جلسة','session').replaceAll('حوالي','About').replaceAll('دقيقة','min').replaceAll('ساعة','h').replaceAll('تقدم','Progress').replaceAll('مهمة','task').replaceAll('المحتوى','Content').replaceAll('ملاحظة','Note');}
function translateRendered(){}
function applyTheme(){applyLanguage();document.body.dataset.theme=state.theme;document.documentElement.style.colorScheme=state.theme==='paper'?'light':'dark'}
function setTheme(t){const allowed=['aurora','midnight','sunrise','paper','mono'];state.theme=allowed.includes(t)?t:'mono';save();applyTheme();renderAll({preserveScroll:true})}
function cycleTheme(){const arr=['aurora','midnight','sunrise','paper','mono'];setTheme(arr[(arr.indexOf(state.theme)+1)%arr.length])}
function renderHome(){
 const day=todayName(), items=dayTasks(day), pr=pct(items.map(x=>x[0]),state.today);
 const ws=weekSummary(), streak=computeStreak();
 const done=pr.n, total=pr.total, remaining=Math.max(total-done,0);
 const modes=['كلية','بدون كلية','ديب وورك'];
 const en=state.lang==='en';
 const smart=()=>`<section class="focus-banner"><b>${en?'Momentum':'دفعة اليوم'} · ${esc((()=>{const h=new Date().getHours(); if(h<11)return en?'Start clean and protect the essentials.':'ابدأ بهدوء واحفظ الأساسيات. '; if(h<17)return en?'Keep the important work moving.':'كمّل المهم وخلي الباقي ياخد مساحته.'; return en?'Close the day without overloading it.':'اقفل يومك من غير ما تحمّله فوق طاقته.'})())}</b><span>${en?'Today-first · no catch-up sprint.':'اليوم أولًا · مفيش تعويض اندفاعي.'}</span></section><div class="quick-grid"><button class="quick-action" onclick="smartTime(15)"><b>15m</b><small>${en?'I have 15 minutes':'عندي 15 دقيقة'}</small></button><button class="quick-action" onclick="smartTime(30)"><b>30m</b><small>${en?'I have 30 minutes':'عندي 30 دقيقة'}</small></button><button class="quick-action" onclick="noEnergyMode()"><b>${en?'Low energy':'مفيش طاقة'}</b><small>${en?'Lighter useful work':'هات الأسهل المفيد'}</small></button><button class="quick-action" onclick="startFocus()"><b>${en?'Focus':'تركيز'}</b><small>${en?'One task only':'مهمة واحدة فقط'}</small></button></div>${coreCompleteNow()?`<div class="focus-banner soft"><b>${en?'Enough for today.':'كفاية لحد هنا.'}</b><span>${en?'Core is complete. Everything else can wait.':'الأساسيات خلصت. والباقي يستنى براحتك.'}</span></div>`:''}`
 const T=en?{start:'Start today ↓',marketing:'Marketing ↗',shari:'Islamic studies ↗',quran:'Qur’an ↗',today:'Today',remaining:'Remaining',hours:'h',target:'Target',execute:'Today’s execution',list:'Daily duties & self-building',next:'Impact & independence',rule:'Fixed pillars & principles',r1:'Reviews before new cards',r2:'Islamic studies + Qur’an stay fixed',r3:'Courses shrink first',ess:'Essentials first',done:'You’re done for today',left:'items left',focus:'Focus only on what matters today. Protect the essentials, and let the rest wait for space.'}
 :{start:'ابدأ ↓',marketing:'التسويق ↗',shari:'الشرعي ↗',quran:'القرآن ↗',today:'اليوم',remaining:'باقي',hours:'س',target:'الهدف',execute:'⚡ تنفيذ اليوم',list:'فروض اليوم وبناء النفس',next:'صناعة الأثر والاستقلال',rule:'الأركان والمبادئ الثابتة',r1:'المراجعات قبل الجديد',r2:'الشرعي والقرآن ثابتان',r3:'الكورسات تتقلص أولًا',ess:'الأساسيات أولًا',done:'خلصت يومك',left:'بنود باقية',focus:'ركز على اللي مطلوب النهارده فقط. الأساسيات أولًا، والباقي ياخد مساحته لما تفضى.'};
 return `<div class="hero">
   <section class="hero-main">
     <div class="kicker">● ${esc(en?translateText(day):day)} · ${esc(en?translateText(todayDayType()):todayDayType())}</div>
     <h1>${en?'Shape your day.<br><span class="hero-accent">Keep it simple.</span>':'رتّب يومك.<br><span class="hero-accent">وخلّيه بسيط.</span>'}</h1>
     <p>${T.focus}</p>
     <div class="hero-actions">
       <button class="btn primary" onclick="document.getElementById('todayTasks').scrollIntoView({behavior:'smooth'})">${T.start}</button>
       <button class="btn" onclick="navigate('marketing')">${T.marketing}</button>
       <button class="btn" onclick="navigate('shari')">${T.shari}</button>
       <button class="btn" onclick="navigate('quran')">${T.quran}</button>
     </div>
   </section>
   <aside class="hero-side">
     <div><div class="kicker">${en?'Today’s progress':'إنجاز اليوم'}</div><div class="ring" style="--p:${pr.p}%"><div><b>${pr.p}%</b><span>${done} / ${total}</span></div></div></div>
     <div><div class="muted tiny" style="margin-bottom:6px">${en?'Today’s marketing dose':'جرعة التسويق'}</div><div class="mode-row">${modes.map(t=>`<button class="mode ${todayDayType()===t?'active':''}" onclick="setDayType('${t}')">${en?translateText(t):t}</button>`).join('')}</div><div class="tiny muted" style="margin-top:8px">${remaining?remaining+' '+T.left:T.done}</div></div>
   </aside>
 </div>
 <div class="stats-grid">
   <div class="stat-card"><small>${T.today}</small><strong>${done}/${total}</strong></div>
   <div class="stat-card"><small>${T.remaining}</small><strong>${remaining}</strong></div>
   <div class="stat-card"><small>${en?'Marketing':'التسويق'}</small><strong>${state.weekly.marketingHours||0}${T.hours}</strong></div>
   <div class="stat-card"><small>${T.target}</small><strong>12${T.hours}</strong></div>
   <div class="stat-card" title="${ws.doneDays}/${ws.elapsed} ${en?'days':'أيام'}"><small>${en?'This week':'الأسبوع ده'}</small><strong>${ws.pct}%</strong></div>
   <div class="stat-card"><small>${en?'Current streak':'التتابع الحالي'}</small><strong>${streak} ${en?'d':'يوم'}</strong></div>
 </div>
 ${smart()}
 ${nowNextLaterCard()}
 <div class="section-title" id="todayTasks"><div><h2>${T.execute}</h2><p>${esc(en?translateText(day):day)} · ${T.ess}.</p></div></div>
 <div class="bento">
   <section class="card tall"><h3>${T.list}</h3>${taskHTML(items)}</section>
   <section class="card"><h3>${T.next}</h3><div class="tasks">
     <div class="task-item quick-link" onclick="navigate('marketing')"><span>💻 ${en?'Marketing task':'مهمة التسويق'}</span><span>↗</span></div>
     <div class="task-item quick-link" onclick="navigate('shari')"><span>🕌 ${en?'Islamic content':'محتوى الشرعي'}</span><span>↗</span></div>
     <div class="task-item quick-link" onclick="navigate('quran')"><span>📖 ${en?'Qur’an review':'مراجعة القرآن'}</span><span>↗</span></div>
   </div></section>
   <section class="card"><h3>${T.rule}</h3><div class="mini-stat"><span>${T.r1}</span><b>1</b></div><div class="mini-stat" style="margin-top:7px"><span>${T.r2}</span><b>2</b></div><div class="mini-stat" style="margin-top:7px"><span>${T.r3}</span><b>3</b></div></section>
 </div>`
}

function renderMarketing(){let overallIds=[],out=`<div class="section-title"><div><h2>💻 معسكر التسويق الطبي الرقمي</h2><p>10 أسابيع · 12 ساعة/أسبوع · كل أسبوع يضيف قطعة إلى دراسة حالة واحدة.</p></div><span class="badge core">أولوية مهنية</span></div><section class="awareness" style="margin-bottom:14px"><div class="kicker">THE UNIFIED CASE STUDY</div><h2 style="margin:8px 0">صيدلية الفيروز الإكلينيكية</h2><p class="muted" style="line-height:1.9;margin:0">مشروع موحّد: صيدلية إكلينيكية افتراضية في حي الفيروز، الأقصر، تقدم استشارات دوائية أونلاين ومتابعة للمرضى.</p></section><div class="grid grid-2"><section class="section-box"><h3>🧠 طريقة اليوم</h3><p>🎥 ساعة تعلم بصري/فيديو → 🤖 15 دقيقة عصف AI → ✍️ 15 دقيقة توليف شخصي بإيدك → 🧠 30 دقيقة Anki.</p><div class="note">سؤال التطبيق الثابت: «موضوع النهارده — إزاي بيتطبق على صيدلية الفيروز تحديدًا؟»</div></section><section class="section-box"><h3>🛡️ Buffer Rule</h3><p>فاتك يوم؟ لا تعوضه في اليوم التالي. زحزح الجدول. وقت الضغط يقل الإنتاج الجديد قبل الأساسيات.</p></section></div>`;
 MARKETING.forEach(([phase,weeks])=>{out+=`<div class="section-title"><div><h2>${esc(phase)}</h2></div></div>`;weeks.forEach(([title,days,deep])=>{const ids=days.concat(deep).map(x=>idFor(title,x));const pr=pct(ids,state.plan);overallIds.push(...ids);out+=`<details class="week-card"><summary><span><b>${esc(title)}</b></span><span class="badge">${pr.p}% · ${pr.n}/${pr.total}</span></summary><div class="week-body"><div class="progress-head"><span>تقدم الأسبوع</span><b>${pr.p}%</b></div><div class="progress"><i style="width:${pr.p}%"></i></div><div class="week-grid" style="margin-top:12px"><div class="week-block"><h4>📚 أيام التعلم</h4>${days.map(x=>{const id=idFor(title,x),d=pChecked(id);return `<label class="mtask ${d?'done':''}"><input type="checkbox" ${d?'checked':''} onchange="togglePlan('${id}')"><span>${esc(x)}</span></label>`}).join('')}</div><div class="week-block"><h4>🔻 التطبيق العميق</h4>${deep.map(x=>{const id=idFor(title,x),d=pChecked(id);return `<label class="mtask ${d?'done':''}"><input type="checkbox" ${d?'checked':''} onchange="togglePlan('${id}')"><span>${esc(x)}</span></label>`}).join('')}</div></div></div></details>`})});
 const ov=pct(overallIds,state.plan);out+=`<div class="section-title"><div><h2>🧠 نظام Anki داخل المعسكر</h2><p>المعلومة التي لا تحتاج الاحتفاظ بها طويلًا لا تتحول تلقائيًا إلى بطاقة.</p></div></div><div class="grid grid-3">${[['Must memorize: 4Ps, STP, SWOT, AIDA, TOFU/MOFU/BOFU, Buyer Persona, USP, CTA, SEO, CAC, LTV, CTR, CPC, CPM, ROAS, Conversion Rate, UTM, SMART, KPIs.'],['Understand and apply: AMA definition, marketing history, Marketing 1.0/2.0/3.0/5.0, evolution stories, and company examples.'],['Reference only: statistics, studies, and long examples.']].map(x=>`<div class="section-box"><p style="line-height:1.85">${esc(x[0])}</p></div>`).join('')}</div><div class="grid grid-2" style="margin-top:12px"><div class="section-box"><h3>✅ بوابة إنشاء البطاقة</h3><p>هل سأحتاجها بعد 3 شهور؟ هل سأستخدمها في شغل حقيقي؟ هل سأضطر للبحث عنها كل مرة؟ نعم على واحدة أو أكثر → بطاقة.</p></div><div class="section-box"><h3>🎯 معيار نجاح المشروع</h3><p>مشكلة واضحة → حل مفهوم → نتيجة موثقة في الـPortfolio.</p></div></div><div class="section-box" style="margin-top:12px"><div class="progress-head"><span>التقدم الكلي</span><b>${ov.p}%</b></div><div class="progress"><i style="width:${ov.p}%"></i></div></div><div class="section-box" style="margin-top:12px;border-color:color-mix(in srgb,var(--c) 28%,var(--line))"><h3>🚀 بعد الأسبوع 10</h3><p>Drug Commercialization مؤجل لما بعد المعسكر. الشهادة الموازية (HubSpot / Google) تظل 20–30 دقيقة وقت الفراغ ولا تكرر محتوى المعسكر.</p></div>`;return out}
function renderShari(){const day=todayName();const rows=DAYS.map(d=>`<div class="timeline-card ${d===day?'today':''}"><div class="day">${d} ${d===day?'· اليوم':''}</div><ul><li>${esc(SHARI_MAP[d])}</li>${d==='الجمعة'?'<li>جلسة أطول + تدبر</li>':'<li>حوالي 70–85 دقيقة</li>'}</ul></div>`).join('');
 return `<div class="section-title"><div><h2>🕌 العلم الشرعي</h2><p>مسار مستقل وثابت. لا يدخل في منافسة مع التسويق.</p></div><span class="badge core">أساسي</span></div><div class="timeline">${rows}</div><div class="grid grid-2" style="margin-top:12px"><section class="section-box"><h3>📚 المصادر الأساسية</h3><p>أحمد السيد — نبدأ بـ «بناء العقيدة للجيل الصاعد».</p><p><b style="color:var(--a)">أيمن عبد الرحيم — مسار أساسي ثابت.</b></p><p>فقه النفس — عبد الرحمن ذاكر.</p><p>الخلفاء الراشدين — راغب السرجاني.</p><p>الجمعة — أحمد عبد المنعم: تدبر وتفسير.</p></section><section class="section-box"><h3>🧭 ترتيب المسارات</h3><p>«تأسيس وعي المسلم المعاصر» موجود هنا كمسار أساسي من محتوى أيمن، وليس بطاقة وهمية في النظام.</p><p>«البيت المسلم» يمكن الرجوع إليه عند الحاجة فقط، وليس مسارًا إلزاميًا موازيًا.</p></section></div><div class="section-title"><div><h2>🧭 تأسيس وعي المسلم المعاصر</h2><p>أيمن عبد الرحيم · 9 محاضرات · الهدف تأسيس/إعادة توجيه الوعي، لا جمع أكبر عدد من المعلومات.</p></div><span class="badge core">Core</span></div><div class="awareness"><div class="grid grid-2"><div><h3 style="margin-top:0">🎯 هدف الدورة</h3><p style="line-height:1.9;margin:0">إعادة أو تأسيس توجه ووعي صحيح — وليس جمع أكبر قدر من المعلومات — مع فهم كيف يؤثر عالم الأفكار في السلوك.</p><p class="muted" style="line-height:1.9;margin:9px 0 0">اللغة + التدين + الثقافة تشكّل عالم الأفكار الذي ينعكس على عالم السلوك، وآخر المحاضرات تركز على ما يمكن فعله بالأفكار الجديدة بعد التعلم.</p></div><div><h3 style="margin-top:0">🧭 مكانها في الخطة</h3><p style="line-height:1.9;margin:0">أيمن عبد الرحيم مسار أساسي ثابت. التنفيذ الأسبوعي الأساسي: السبت والاثنين والأربعاء، مع حصة أطول الجمعة. في ضغط اليوم لا تُلغى هويته من الخطة؛ الذي يمكن ضغطه هو الجرعة التنفيذية.</p></div></div><div class="grid grid-3" style="margin-top:13px"><div class="note"><b>01</b><br>التوجه والوعي قبل الكم المعلوماتي</div><div class="note"><b>02</b><br>تاريخ يشرح أثر عالم الأفكار على السلوك</div><div class="note"><b>03</b><br>الانتقال من الفكرة إلى ما نفعله بها</div></div><div class="lecture-grid">${AWARENESS.map(n=>`<label class="lecture"><input type="checkbox" ${pChecked('aware_'+n)?'checked':''} onchange="togglePlan('aware_${n}')"><span>المحاضرة ${n} من 9</span></label>`).join('')}</div><div class="note" style="margin-top:10px">💡 ملاحظة الدورة: يوجد Trailer منفصل في بعض المنصات، لكنه ليس واحدًا من المحاضرات التسع الأساسية.</div></div><div class="section-title"><div><h2>✅ تنفيذ اليوم الشرعي</h2><p>${day} — علّم البنود لما تخلصها.</p></div></div><section class="section-box">${taskHTML(shariItems(day))}</section>`}
function renderQuran(){
 const open=!!state.quranFrameOpen;
 return `<div class="section-title"><div><h2>📖 القرآن</h2><p>مراجعة المحفوظ أثناء الدراسة؛ رفيق القرآن يظل أداة مستقلة تدخل لها وقت ما تحتاج.</p></div><span class="badge core">مراجعة فقط</span></div>
 <div class="grid grid-2">
  <section class="section-box">
   <h3>مراجعة اليوم</h3>
   <div class="task-item ${tChecked('quran')?'done':''}" data-task-id="quran"><input type="checkbox" id="quranToday" ${tChecked('quran')?'checked':''} onchange="toggleToday('quran')"><label class="task-text" for="quranToday">${state.lang==='en'?'Reviewed memorized Qur’an today — Juz ‘Amma / Tabarak / older memorized portions / pre-university memorization':'راجعت المحفوظ اليوم — عمّ / تبارك / القديم / ما تم حفظه قبل الدراسة'}</label><span class="mihrab-badge badge-spirit">${state.lang==='en'?'Core':'ورد'}</span></div>
   <div class="note" style="margin-top:10px">المكان الأفضل: المصلى بين المحاضرات والسكاشن، ثم المواصلات. لو التركيز وقع وبدأ الخلط بين المتشابهات: قف وخذ راحة.</div>
  </section>
  <section class="section-box quran-bridge">
   <div class="bridge-icon">✦</div>
   <div><h3 style="margin-bottom:5px">رفيق القرآن</h3><p class="muted" style="margin:0">نسختك المنشورة على Cloudflare. لو رفيق مثبت كتطبيق على جهازك، افتحه من زر «فتح رفيق»؛ وإلا سيفتح الموقع.</p></div>
   <div class="bridge-actions"><a class="btn primary" href="${RAFIQ_URL}" target="_blank" rel="noopener">فتح رفيق ↗</a><button class="btn ${open?'active':''}" onclick="toggleRafiqFrame()">${open?'إخفاء داخل اللوحة':'عرض داخل اللوحة'}</button></div>
  </section>
 </div>
 ${open?`<div class="section-title"><div><h2>✦ رفيق القرآن</h2><p>يُحمّل الإطار فقط عند طلبه حتى تظل اللوحة سريعة وخفيفة.</p></div><span class="badge">Cloudflare</span></div><div class="iframe-wrap"><div class="iframe-head"><b>رفيق القرآن</b><div style="display:flex;gap:7px;align-items:center"><span class="badge">Live</span><button class="icon-btn" onclick="toggleRafiqFrame()" aria-label="إغلاق">×</button></div></div><iframe id="rafiqFrame" title="رفيق القرآن داخل Mihrab" src="${RAFIQ_URL}" loading="lazy" allow="autoplay; fullscreen" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"></iframe></div>`:''}`;
}
function renderCourses(){return `<div class="section-title"><div><h2>📚 الكورسات والأنظمة المساندة</h2><p>مساندة لا تسبق الأساسيات.</p></div></div><div class="grid grid-3"><section class="section-box"><h3>🧠 Anki</h3><p>المراجعة المستحقة أولًا. الجديد بميزانية ثابتة. أماكنه المفضلة: المواصلات، المصلى، والفواصل.</p></section><section class="section-box"><h3>🚀 McKinsey Forward</h3><p>حوالي ساعتين أسبوعيًا. أول ما ينكمش عند ضغط الدراسة.</p><label class="task ${state.weekly.mckinsey?'done':''}"><input type="checkbox" ${state.weekly.mckinsey?'checked':''} onchange="state.weekly.mckinsey=this.checked;save();renderAll()"><span>أنجزت نصيب الأسبوع</span></label></section><section class="section-box"><h3>💊 The Pharmacist's Guide to Dose Calculations</h3><p>2:41 ساعة إجماليًا · جلسات قصيرة 10–15 دقيقة تقريبًا. أيضًا من أول الأشياء التي يمكن تأجيلها عند الضغط.</p><label class="task ${state.weekly.dose?'done':''}"><input type="checkbox" ${state.weekly.dose?'checked':''} onchange="state.weekly.dose=this.checked;save();renderAll()"><span>أنجزت نصيب الأسبوع</span></label></section></div><div class="grid grid-2" style="margin-top:12px"><section class="section-box"><h3>🎓 HubSpot / Google</h3><p>20–30 دقيقة وقت الفراغ، بالتوازي مع المعسكر، بدون إعادة شرح ما تدرسه بالفعل.</p><label class="task ${state.weekly.cert?'done':''}"><input type="checkbox" ${state.weekly.cert?'checked':''} onchange="state.weekly.cert=this.checked;save();renderAll()"><span>أنجزت نصيب الشهادة الموازية</span></label></section><section class="section-box"><h3>📗 EasyPeasy</h3><p>يظل موجودًا كقراءة خفيفة داخل اليوم، ولا يضخم الخطة الرئيسية.</p></section></div><div class="section-box" style="margin-top:12px;border-color:color-mix(in srgb,var(--c) 28%,var(--line))"><h3>⏸️ Drug Commercialization</h3><p>مؤجل إلى ما بعد معسكر التسويق.</p></div>`}
function consistencySection(){
 const en=state.lang==='en';
 const ws=weekSummary(), ms=monthSummary(), ys=yearSummary(), as=allTimeSummary();
 const streak=computeStreak(), best=computeBestStreak();
 const {strongest,weakest}=strongestWeakestMonth();
 const monthName=new Date().toLocaleDateString(en?'en-US':'ar-EG',{month:'long',year:'numeric'});
 const ymLabel=ym=>{ const [y,m]=ym.split('-').map(Number); return new Date(y,m-1,1).toLocaleDateString(en?'en-US':'ar-EG',{month:'long',year:'numeric'}); };
 return `<section class="section-box" style="margin-top:12px"><div class="section-title" style="margin:0 0 8px"><div><h3 style="margin:0">📈 ${en?'Consistency over time':'الالتزام مع الوقت'}</h3><p>${en?'Based on days actually recorded — gaps are left unknown, never counted against you.':'مبني على الأيام المسجَّلة فعليًا — الفجوات بتتسجل كـ"غير معروف"، مش ضدك.'}</p></div></div>
 <div class="stats-grid">
   <div class="stat-card" title="${ws.doneDays}/${ws.elapsed} ${en?'days':'أيام'}"><small>${en?'This week':'الأسبوع ده'}</small><strong>${ws.pct}%</strong></div>
   <div class="stat-card" title="${ms.doneDays}/${ms.elapsed} ${en?'days':'أيام'}"><small>${en?'This month':'الشهر ده'}</small><strong>${ms.pct}%</strong></div>
   <div class="stat-card" title="${ys.doneDays}/${ys.elapsed} ${en?'days':'أيام'}"><small>${en?'This year':'السنة دي'}</small><strong>${ys.pct}%</strong></div>
   <div class="stat-card" title="${en?'Since':'من'} ${as.firstDate}"><small>${en?'All-time':'إجمالي'}</small><strong>${as.pct}%</strong></div>
 </div>
 <div class="grid grid-2" style="margin-top:10px">
   <div class="stat-card"><small>${en?'Current streak':'التتابع الحالي'}</small><strong>${streak} ${en?'d':'يوم'}</strong></div>
   <div class="stat-card"><small>${en?'Best streak':'أفضل تتابع'}</small><strong>${best} ${en?'d':'يوم'}</strong></div>
 </div>
 ${strongest?`<div class="grid grid-2" style="margin-top:10px">
   <div class="stat-card"><small>${en?'Strongest month':'أقوى شهر'}</small><strong>${strongest.pct}%</strong><div class="tiny muted" style="margin-top:2px">${esc(ymLabel(strongest.ym))}</div></div>
   <div class="stat-card"><small>${en?'Weakest month':'أضعف شهر'}</small><strong>${weakest.pct}%</strong><div class="tiny muted" style="margin-top:2px">${esc(ymLabel(weakest.ym))}</div></div>
 </div>`:`<div class="note" style="margin-top:10px">${en?'Not enough recorded months yet to compare — this fills in over time.':'لسه مفيش شهور مسجَّلة كفاية للمقارنة — هتتظهر مع الوقت.'}</div>`}
 <div class="tiny muted" style="margin-top:12px;margin-bottom:6px">${esc(monthName)}</div>
 <div class="month-heatmap">${monthHeatmapCells()}</div>
 </section>`;
}
function recentlyCompleted(limit){
  const done=state.library.filter(x=>x.status==='done');
  const withDate=done.filter(x=>x.completedAt).sort((a,b)=>new Date(b.completedAt)-new Date(a.completedAt));
  const withoutDate=done.filter(x=>!x.completedAt);
  return {items:[...withDate,...withoutDate].slice(0,limit||6), total:done.length};
}
function achievementSection(){
  const en=state.lang==='en';
  const {items,total}=recentlyCompleted(6);
  if(!total) return '';
  const catLabel={islamic:en?'Islamic':'شرعي',career:en?'Career':'مهني',reading:en?'Reading':'قراءة',other:en?'Other':'أخرى'};
  const rows=items.map(x=>{
    const title=en&&x.titleEn?x.titleEn:x.title;
    const dateStr=x.completedAt?new Date(x.completedAt).toLocaleDateString(en?'en-US':'ar-EG',{day:'numeric',month:'short',year:'numeric'}):(en?'Date unknown':'تاريخ غير معروف');
    return `<div class="library-item achv-item"><div class="grow"><b>${esc(title)}</b><small>${esc(catLabel[x.category]||x.category||'')} · ${esc(dateStr)}</small></div><span class="mihrab-badge">✓ ${en?'Completed':'مكتمل'}</span></div>`;
  }).join('');
  return `<section class="section-box" style="margin-top:12px"><div class="section-title" style="margin:0 0 8px"><div><h3 style="margin:0">🏆 ${en?'Recently completed':'أُنجز مؤخرًا'}</h3><p>${en?`${total} track${total===1?'':'s'} completed so far — a record of what you actually built, not a score to chase.`:`${total} مسار مكتمل لحد دلوقتي — سجل لما بنيته فعلًا، مش نقاط تلاحقها.`}</p></div></div>${rows}</section>`;
}
function renderSystemBase(){
 const themes = state.lang==='en'
  ? [['aurora','Aurora','Emerald + Gold'],['midnight','Midnight','Indigo + Gold'],['sunrise','Velvet','Amber + Burgundy'],['paper','Champagne','Ivory + Gold'],['mono','Obsidian','Platinum + Gold']]
  : [['aurora','Aurora','زمرد + ذهب'],['midnight','Midnight','نيلي + ذهب'],['sunrise','Velvet','عنبر + برغندي'],['paper','Champagne','عاجي + ذهب'],['mono','Obsidian','بلاتيني + ذهب']];
 const rating=state.weekly.rating||'';
 const reviewChoices=state.lang==='en'
  ? [['excellent','🌟','Excellent','80–90%+ and steady progress'],['good','👍','Very good','Going well with some friction'],['unstable','⚖️','Unstable','Something needs adjustment'],['emergency','🚨','Emergency week','Essentials had priority']]
  : [['excellent','🌟','ممتاز','80–90%+ والتقدم ثابت'],['good','👍','جيد جدًا','ماشي كويس مع شوية تعثر'],['unstable','⚖️','متذبذب','فيه حاجة محتاجة تعديل'],['emergency','🚨','أسبوع طوارئ','الأولوية كانت للضروريات']];
 const dayTypeLabels = state.lang==='en'
   ? {'كلية':'College','بدون كلية':'No college','ديب وورك':'Deep work','راحة':'Rest'}
   : {'كلية':'كلية','بدون كلية':'بدون كلية','ديب وورك':'ديب وورك','راحة':'راحة'};
 const dayLabels = state.lang==='en'
   ? {'السبت':'Saturday','الأحد':'Sunday','الاثنين':'Monday','الثلاثاء':'Tuesday','الأربعاء':'Wednesday','الخميس':'Thursday','الجمعة':'Friday'}
   : Object.fromEntries(DAYS.map(d=>[d,d]));
 return `<div class="section-title"><div><h2>⚙️ ${state.lang==='en'?'System & review':'النظام والمراجعة'}</h2><p>${state.lang==='en'?'Tune how the board runs without changing the plan itself.':'هنا تضبط طريقة تشغيل اللوحة بدل ما تغيّر الخطة نفسها.'}</p></div><span class="badge core">${state.lang==='en'?'Control':'تحكم'}</span></div>
 <section class="section-box"><h3>🎨 ${state.lang==='en'?'Board appearance':'شكل اللوحة'}</h3><p class="muted" style="margin-top:-3px">${state.lang==='en'?'The theme changes the background, surfaces, borders, shadows, glow, and overall feel — not just one button color.':'الثيم يغيّر الخلفية، البطاقات، الحواف، الظلال، الإضاءة وطابع الواجهة — مش مجرد لون زر.'}</p><div class="theme-grid">${themes.map(([id,n,desc])=>`<button type="button" class="theme-card ${state.theme===id?'active':''}" onclick="setTheme('${id}')"><div class="swatch swatch-${id}"></div><b>${n}</b><small>${desc}</small></button>`).join('')}</div></section>
 <section class="section-box" style="margin-top:12px"><div class="section-title" style="margin:0 0 7px"><div><h3 style="margin:0">🌐 ${state.lang==='en'?'Interface language':'لغة الواجهة'}</h3><p>${state.lang==='en'?'Switch between Arabic and English any time.':'بدّل بين العربية والإنجليزية في أي وقت.'}</p></div><span class="badge">${state.lang==='en'?'EN':'عربي'}</span></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn ${state.lang==='ar'?'primary':''}" onclick="setLang('ar')">العربية</button><button class="btn ${state.lang==='en'?'primary':''}" onclick="setLang('en')">English</button></div></section>
 <div class="grid grid-2" style="margin-top:12px"><section class="section-box"><h3>🗓️ ${state.lang==='en'?'Day types':'نوع كل يوم'}</h3>${DAYS.map(d=>`<div class="quote-settings"><div><b>${dayLabels[d]}</b><div class="tiny muted">${state.lang==='en'?'Sets the marketing dose for that day':'يحدد جرعة التسويق لذلك اليوم'}</div></div><select aria-label="${state.lang==='en'?'Day type for ':'نوع يوم '}${dayLabels[d]}" onchange="state.weekDayTypes['${d}']=this.value;save();renderAll()">${['كلية','بدون كلية','ديب وورك','راحة'].map(v=>`<option value="${v}" ${(state.weekDayTypes[d]||'كلية')===v?'selected':''}>${dayTypeLabels[v]}</option>`).join('')}</select></div>`).join('')}</section>
 <section class="section-box"><h3>🎨 ${state.lang==='en'?'Board identity':'هوية اللوحة'}</h3><p class="muted" style="margin-top:-3px">${state.lang==='en'?'Themes, language, and day types live here. The plan itself stays fixed.':'الثيمات واللغة ونوع كل يوم هنا. الخطة نفسها تفضل ثابتة.'}</p><div class="note">${state.lang==='en'?'These controls change presentation and operation only while keeping your plan intact.':'التغيير هنا بصري وتشغيلي فقط: الثيم يغيّر الخلفية والزجاج والحدود والظلال والإضاءة مع الحفاظ على نفس المحتوى.'}</div></section></div>
 <section class="section-box" style="margin-top:12px"><div class="section-title" style="margin:0 0 6px"><div><h2 style="font-size:20px">🔎 ${state.lang==='en'?'Weekly review':'التقييم الأسبوعي'}</h2><p>${state.lang==='en'?'Choose your real weekly rating — it saves and counts as the weekly review.':'اختار تقييمك الحقيقي للأسبوع — الاختيار بيتحفظ ويُعتبر المراجعة الأسبوعية منجزة.'}</p></div><span class="badge ${rating?'core':''}">${rating?(state.lang==='en'?'Saved':'محفوظ'):(state.lang==='en'?'Not rated':'لم يُقيَّم')}</span></div><div class="review-grid">${reviewChoices.map(([id,e,t,d])=>`<label class="review-choice ${rating===id?'selected':''}"><input type="radio" name="weekly-rating" value="${id}" ${rating===id?'checked':''} onchange="setWeeklyRating('${id}')"><span class="emoji">${e}</span><b>${t}</b><small>${d}</small></label>`).join('')}</div><div class="note" style="margin-top:11px">${state.lang==='en'?'Weekly review: 10–15 minutes. Ask: what was easy to sustain, what kept slipping, and what will you reduce or lock in next week?':'المراجعة الأسبوعية: 10–15 دقيقة. اسأل نفسك: ماذا التزمت به بسهولة؟ ماذا ظل يتأجل؟ وما الذي سأخففه أو أثبته الأسبوع القادم؟'}</div></section>
 ${consistencySection()}
 ${achievementSection()}
 <section class="section-box" style="margin-top:12px"><div class="section-title" style="margin:0 0 8px"><div><h3 style="margin:0">📱 ${state.lang==='en'?'Use it as an app':'استخدمها كتطبيق'}</h3><p>${state.lang==='en'?'Install Mihrab on your phone home screen as a standalone app.':'ثبّت Mihrab على شاشة الموبايل لفتحها كتطبيق مستقل بدل المتصفح.'}</p></div><span class="badge">PWA</span></div><button class="btn primary" onclick="installPWA()" id="installBtn">${state.lang==='en'?'Install on device ↗':'تثبيت على الجهاز ↗'}</button><div class="tiny muted" style="margin-top:8px">${state.lang==='en'?'Home-screen install: yes. A live home-screen widget requires a native app; this board is designed as a lightweight, installable PWA.':'الهوم سكرين: نعم. Widget حيّ فوق الشاشة الرئيسية يحتاج تطبيقًا أصليًا؛ اللوحة هنا مصممة لتكون PWA خفيفة وقابلة للتثبيت.'}</div></section><section class="section-box power-card" style="margin-top:12px"><div class="section-title" style="margin:0 0 6px"><div><h3>⚡ ${state.lang==='en'?'Performance':'الأداء'}</h3><p>${state.lang==='en'?'Control live effects without changing your plan.':'تحكم في المؤثرات الحية من غير ما تغيّر الخطة.'}</p></div><span class="badge">${state.settings.lowPower?(state.lang==='en'?'Low power':'توفير'): (state.lang==='en'?'Live':'حي')}</span></div><label class="switch"><input type="checkbox" ${state.settings.lowPower?'checked':''} onchange="state.settings.lowPower=this.checked;save();document.body.dataset.lowPower=this.checked?'true':'false';renderAll()"> ${state.lang==='en'?'Low Power Mode — reduce canvas/glow effects':'وضع توفير الطاقة — يقلل الـCanvas والـglow'}</label></section>
 <div class="grid grid-2" style="margin-top:12px"><section class="section-box"><h3>📊 ${state.lang==='en'?'Marketing this week':'التسويق هذا الأسبوع'}</h3><div class="progress-head"><span>${state.lang==='en'?'Hours':'الساعات'}</span><b>${state.weekly.marketingHours||0} / 12</b></div><div class="progress"><i style="width:${Math.min(100,(state.weekly.marketingHours||0)/12*100)}%"></i></div><div class="field" style="margin-top:10px"><label>${state.lang==='en'?'Enter actual hours':'أدخل الساعات الفعلية'}</label><input type="number" min="0" step="0.5" value="${state.weekly.marketingHours||0}" onchange="state.weekly.marketingHours=parseFloat(this.value)||0;save();renderAll()"></div></section><section class="section-box"><h3>🛡️ ${state.lang==='en'?'Energy modes':'أوضاع الطاقة'}</h3><p><b>🟢 ${state.lang==='en'?'Normal:':'طبيعي:'}</b> ${state.lang==='en'?'Full plan.':'الخطة كاملة.'}</p><p><b>🟡 ${state.lang==='en'?'Low energy:':'منخفض الطاقة:'}</b> ${state.lang==='en'?'Prayer/adhkar + some Qur’an + small marketing output + old Anki only. Side content pauses first.':'الصلاة/الأذكار + قدر من القرآن + إنتاج تسويق صغير + Anki قديم فقط. المحتوى الجانبي يتوقف أولًا.'}</p><p><b>🔴 ${state.lang==='en'?'Exceptional:':'استثنائي:'}</b> ${state.lang==='en'?'Prayer + adhkar + a little Qur’an + rest.':'الصلاة + الأذكار + قرآن يسير + راحة.'}</p></section></div>
 <div class="section-box" style="margin-top:12px"><h3>🧩 ${state.lang==='en'?'Operating rules':'قواعد التشغيل'}</h3><div class="grid grid-2"><div>${(state.lang==='en'?['Sleep 6–8 hours.','During exams: regular Anki continues; new production reduces first.','If two days are lost in a row: no forced catch-up; review why.']:['النوم 6–8 ساعات.','امتحانات: Anki regular مستمر، والإنتاج الجديد يقل أولًا.','لو يومان ضاعا وراء بعض: لا تعويض قهري؛ راجع السبب.']).map(x=>`<p>${x}</p>`).join('')}</div><div>${(state.lang==='en'?['Islamic studies stay fixed.','Qur’an stays fixed but timing is flexible.','Marketing is the professional priority; McKinsey and Dose shrink first.']:['الشرعي ثابت.','القرآن ثابت لكن توقيته مرن.','Marketing هو الأولوية المهنية؛ McKinsey وDose أول من يتقلص.']).map(x=>`<p>${x}</p>`).join('')}</div></div></div>`;
}



/* ================================================================
   MIHRAB CLEAN CORE — one state, one router, one render pipeline
   ================================================================ */
(function(){
  'use strict';
  const VIEWS=['home','marketing','shari','quran','courses','system'];
  let libraryTab='active';
  window.setLibraryTab=t=>{libraryTab=['active','paused','done'].includes(t)?t:'active';rerender()};
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const validView=v=>VIEWS.includes(v)?v:'home';

  function ensureState(){
    state.today ||= {};
    state.plan ||= {};
    state.weekly={marketingHours:0,mckinsey:false,dose:false,review:false,rating:'',cert:false,...(state.weekly||{})};
    state.weekDayTypes ||= {};
    state.settings={lowPower:false,...(state.settings||{})};
    state.inbox ||= [];
    state.library ||= [];
    state.metrics={focusMinutes:0,sessions:0,...(state.metrics||{})};
    state.history ||= {};
    state.schemaVersion=3;
  }

  function migrate(){
    try{
      const raw=localStorage.getItem(KEY);
      if(raw){const x=JSON.parse(raw);state={...state,...x};}
      else {
        const legacy=localStorage.getItem(OLD_KEY);
        if(legacy){const x=JSON.parse(legacy);state.today=x.today||{};state.plan=x.plan||{};state.weekly={...state.weekly,...(x.weekly||{})};}
      }
    }catch(e){console.warn('[Mihrab] local data ignored:',e)}
    ensureState(); resetDay();
  }

  function librarySeeds(){
    if(state.library.some(x=>x.systemSeed)) return;
    state.library=[
      {id:'lib_zad',title:'أكاديمية زاد',titleEn:'ZAD Academy',category:'islamic',group:'zad',days:[...DAYS],duration:30,core:true,status:'active',sessions:0,completedSessions:0,systemSeed:true},
      {id:'lib_ayman',title:'مسار أيمن عبد الرحيم',titleEn:'Ayman Abdel Rahim track',category:'islamic',group:'ayman',days:['السبت','الاثنين','الأربعاء','الجمعة'],duration:30,core:true,status:'active',sessions:9,completedSessions:0,systemSeed:true},
      {id:'lib_awareness',title:'تأسيس وعي المسلم المعاصر',titleEn:'Building the Contemporary Muslim’s Awareness',category:'islamic',group:'awareness',days:['السبت','الاثنين','الأربعاء','الجمعة'],duration:30,core:true,status:'active',sessions:9,completedSessions:0,systemSeed:true},
      {id:'lib_aqeedah',title:'بناء العقيدة للجيل الصاعد',titleEn:'Building Aqeedah for the Rising Generation',category:'islamic',group:'ahmed-sayed',days:['السبت','الاثنين','الأربعاء'],duration:30,core:true,status:'done',sessions:8,completedSessions:8,systemSeed:true},
      {id:'lib_easy',title:'EasyPeasy Way to Quit',titleEn:'EasyPeasy Way to Quit',category:'reading',days:[],duration:10,core:false,status:'active',sessions:0,completedSessions:0,systemSeed:true},
      {id:'lib_google',title:'Google / HubSpot certifications',titleEn:'Google / HubSpot certifications',category:'career',days:[],duration:25,important:true,status:'active',sessions:0,completedSessions:0,systemSeed:true}
    ];
  }

  function activeMode(){return state.modeDate===keyDate()?state.mode:(dayTypeToMode[todayDayType()]||'normal')}
  function modeAllows(id){
    const m=activeMode(), p=priorityOf(id);
    if(m==='rest') return false;
    if(m==='survival') return ['pr_f','pr_d','pr_a','pr_m','pr_i','azkar','quran','rafiq','aw','zad'].includes(id);
    if(m==='exam') return p==='core'||id==='marketing';
    if(m==='busy') return p!=='optional';
    return true;
  }
  function taskObjects(){
    const items=dayTasks(todayName()).filter(([id])=>modeAllows(id)).map(([id,text])=>({id,label:text,duration:durationFor[id]||15,priority:priorityOf(id),done:tChecked(id)}));
    // systemSeed library entries mirror categories already in the fixed daily list (zad/awareness/etc.) —
    // only inject the user's own added tracks here so Focus/smartTime never suggest the same duty twice.
    state.library.filter(x=>x.status==='active'&&!x.systemSeed&&x.days?.includes(todayName())).forEach(x=>items.push({id:x.id,label:state.lang==='en'&&x.titleEn?x.titleEn:x.title,duration:x.duration||15,priority:x.core?'core':x.important?'important':'optional',done:!!state.today[x.id],custom:true}));
    return items;
  }
  function smartTime(min){
    const en=state.lang==='en';
    const candidates=taskObjects().filter(x=>!x.done&&x.duration<=min).sort((a,b)=>(a.priority==='core'?0:a.priority==='important'?1:2)-(b.priority==='core'?0:b.priority==='important'?1:2)||a.duration-b.duration).slice(0,6);
    if(!candidates.length){infoModal(en?`Nothing useful fits ${min} minutes right now.`:`مفيش حاجة مفيدة مناسبة لـ ${min} دقيقة دلوقتي.`);return;}
    const list=candidates.map(x=>`<button class="command-item" onclick="closeMihrabModal();startFocus('${esc(x.id)}')"><span>${esc(x.label)}</span><small>${x.duration}${en?'m':'د'}</small></button>`).join('');
    openModal(`<div class="mihrab-modal-head"><b>${en?`Good fits for ${min} minutes`:`مناسب لـ ${min} دقيقة`}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="command-list">${list}</div>`);
  }
  function nowNextLater(){return taskObjects().filter(x=>!x.done).sort((a,b)=>a.duration-b.duration).slice(0,3)}
  function nowNextLaterCard(){
    const en=state.lang==='en',items=nowNextLater();
    if(!items.length)return '';
    const tags=en?['Now','Next','Later']:['دلوقتي','بعدها','بعد كده'];
    const rows=items.map((x,i)=>`<button class="nnl-row" onclick="startFocus('${esc(x.id)}')"><span class="nnl-tag">${tags[i]}</span><span class="nnl-label">${esc(x.label)}</span><span class="nnl-dur">${x.duration}${en?'m':'د'}</span></button>`).join('');
    return `<section class="section-box nnl-card"><h3>${en?'What matters now':'الأهم دلوقتي'}</h3><div class="nnl-list">${rows}</div></section>`;
  }
  function noEnergyMode(){
    const en=state.lang==='en';
    const candidates=taskObjects().filter(x=>!x.done&&x.duration<=15&&x.priority!=='optional').sort((a,b)=>a.duration-b.duration).slice(0,6);
    if(!candidates.length){infoModal(en?'Nothing light enough right now — resting is a valid option.':'مفيش حاجة خفيفة كفاية دلوقتي — الراحة كمان اختيار سليم.');return;}
    const list=candidates.map(x=>`<button class="command-item" onclick="closeMihrabModal();startFocus('${esc(x.id)}')"><span>${esc(x.label)}</span><small>${x.duration}${en?'m':'د'}</small></button>`).join('');
    openModal(`<div class="mihrab-modal-head"><b>${en?'Light, still meaningful':'خفيف بس له معنى'}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="command-list">${list}</div>`);
  }
  window.noEnergyMode=noEnergyMode;
  function coreDone(){const core=taskObjects().filter(x=>x.priority==='core');return core.length>0&&core.every(x=>x.done)}

  function render(id){
    const renderer={home:renderHome,marketing:renderMarketing,shari:renderShari,quran:renderQuran,courses:renderCourses,system:renderSystem}[id];
    const host=$('#view-'+id); if(!host||typeof renderer!=='function') return;
    host.innerHTML=renderer();
  }
  function paintNav(){
    const en=state.lang==='en';
    const make=([id,ic,ar,enLabel])=>`<a class="nav-btn ${state.view===id?'active':''}" data-view="${id}" href="#${id}" aria-current="${state.view===id?'page':'false'}"><span class="nav-icon">${ic}</span><span class="nav-label">${esc(en?enLabel:ar)}</span></a>`;
    const html=NAV.map(make).join('');
    $('#nav').innerHTML=html; $('#mobileNav').innerHTML=html;
    $('#langLabel').textContent=en?'ع':'EN';
    $('#mihrab-online-dot')?.setAttribute('title',navigator.onLine?(en?'Online':'متصل'):(en?'Offline':'غير متصل'));
  }
  function showView(id){
    $$('.view').forEach(v=>{const on=v.id==='view-'+id;v.hidden=!on;v.classList.toggle('active',on);});
  }
  function route(id,{scroll=true,push=true}={}){
    id=validView(id); state.view=id;
    if(push && location.hash!=='#'+id) history.pushState({view:id},'', '#'+id);
    document.body.classList.add('is-rendering');
    try{render(id);showView(id);paintNav();applyLanguage();applyTheme();document.body.dataset.mode=activeMode();document.body.dataset.lowPower=state.settings.lowPower?'true':'false';save();}
    catch(err){console.error('[Mihrab] render error',id,err);const host=$('#view-'+id);if(host)host.innerHTML=`<section class="section-box error-box"><h2>${state.lang==='en'?'Something went wrong':'حصل خطأ غير متوقع'}</h2><p class="muted">${state.lang==='en'?'The page failed to render.':'الصفحة ما اتعرضتش بشكل صحيح.'}</p></section>`;showView(id)}
    requestAnimationFrame(()=>document.body.classList.remove('is-rendering'));
    if(scroll) window.scrollTo({top:0,left:0,behavior:'auto'});
  }

  function rerender(){route(state.view,{scroll:false,push:false})}
  window.renderAll=opts=>rerender(opts||{});
  window.navigate=id=>route(id);
  window.nav=paintNav;
  window.setLang=v=>{state.lang=v==='en'?'en':'ar';save();rerender()};
  window.setTheme=setTheme;
  window.cycleTheme=cycleTheme;
  window.setDayType=t=>{state.weekDayTypes[todayName()]=t;save();rerender()};
  window.toggleRafiqFrame=()=>{state.quranFrameOpen=!state.quranFrameOpen;save();rerender()};
  window.setMode=mode=>{state.mode=['normal','busy','exam','survival','rest'].includes(mode)?mode:'normal';state.modeDate=keyDate();save();rerender()};
  window.smartTime=smartTime;
  window.nowNextLaterCard=nowNextLaterCard;

  // One delegated interaction layer. No per-render listeners, no duplicated nav systems.
  document.addEventListener('click',e=>{
    const navLink=e.target.closest('.nav-btn[data-view]');
    if(navLink){e.preventDefault();route(navLink.dataset.view);return;}
    const taskAction=e.target.closest('[data-action]')?.dataset.action;
    if(taskAction==='focus') startFocus();
  });
  document.addEventListener('change',e=>{
    const el=e.target;
    if(!(el instanceof HTMLInputElement||el instanceof HTMLSelectElement)) return;
    if(el.matches('input[type="checkbox"][data-today-id]')) toggleToday(el.dataset.todayId);
    if(el.matches('input[type="checkbox"][data-plan-id]')) togglePlan(el.dataset.planId);
    if(el.matches('[data-weekly-key]')){state.weekly[el.dataset.weeklyKey]=el.type==='checkbox'?el.checked:Number(el.value)||0;save();rerender();}
    if(el.matches('[data-day-type]')){state.weekDayTypes[el.dataset.dayType]=el.value;save();rerender();}
    if(el.matches('[data-rating]')) setWeeklyRating(el.dataset.rating);
    if(el.matches('#lowPowerToggle')){state.settings.lowPower=el.checked;save();rerender();}
  });
  window.addEventListener('popstate',()=>route((location.hash||'#home').slice(1),{push:false}));

  // Keyboard: Cmd/Ctrl+K opens the command palette; Escape closes whatever overlay is open.
  window.addEventListener('keydown',e=>{
    if((e.metaKey||e.ctrlKey)&&(e.key==='k'||e.key==='K')){e.preventDefault();openCommandPalette();return;}
    if(e.key==='Escape'){
      const overlay=$('#mihrabOverlay');
      if(overlay&&overlay.classList.contains('open')){closeModal();return;}
      const focus=$('#focusMode');
      if(focus&&focus.classList.contains('open')){closeFocus();return;}
    }
  });
  // Click on the dimmed backdrop (not the modal card itself) closes the modal.
  document.addEventListener('click',e=>{if(e.target.id==='mihrabOverlay')closeModal();});
  window.addEventListener('online',paintNav,{passive:true});window.addEventListener('offline',paintNav,{passive:true});

  function toggleToday(id){
    const was=!!state.today[id]; state.today[id]=!was; save();
    const row=document.querySelector(`[data-task-id="${CSS.escape(id)}"]`);
    if(row){
      row.classList.toggle('done',state.today[id]);
      if(state.today[id]){
        row.classList.remove('just-checked'); void row.offsetWidth; row.classList.add('just-checked');
        const label=row.querySelector('.task-text')?.textContent||row.querySelector('span')?.textContent||'';
        showUndo(id,label);
      }
    }
    updateRing();
  }
  let undoTimer=null;
  function showUndo(id,label){
    let host=document.getElementById('undoToast');
    if(!host){host=document.createElement('div');host.id='undoToast';host.className='undo-toast';host.setAttribute('role','status');document.body.appendChild(host);}
    const en=state.lang==='en';
    host.innerHTML=`<span>${esc(label)}</span><button type="button" onclick="undoLastCheck('${esc(id)}')">${en?'Undo':'تراجع'}</button>`;
    host.classList.remove('show'); void host.offsetWidth; host.classList.add('show');
    clearTimeout(undoTimer);
    undoTimer=setTimeout(()=>host.classList.remove('show'),4200);
  }
  function undoLastCheck(id){
    clearTimeout(undoTimer);
    const host=document.getElementById('undoToast'); if(host) host.classList.remove('show');
    if(state.today[id]) toggleToday(id);
  }
  window.undoLastCheck=undoLastCheck;
  function togglePlan(id){state.plan[id]=!state.plan[id];save();const row=document.querySelector(`[data-plan-row="${CSS.escape(id)}"]`);row?.classList.toggle('done',!!state.plan[id]);const badge=row?.closest('.week-card')?.querySelector('summary .badge');if(badge){const inputs=[...row.closest('.week-card').querySelectorAll('[data-plan-id]')];const ids=inputs.map(i=>i.dataset.planId);const p=pct(ids,state.plan);badge.textContent=`${p.p}% · ${p.n}/${p.total}`} }
  let ringAnimHandle=null;
  function easeOutCubic(t){return 1-Math.pow(1-t,3)}
  function animateRingTo(ring,fromP,toP,fromN,toN,total){
    if(ringAnimHandle) cancelAnimationFrame(ringAnimHandle);
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      ring.style.setProperty('--p',toP+'%');
      ring.querySelector('b')?.replaceChildren(document.createTextNode(toP+'%'));
      ring.querySelector('span')?.replaceChildren(document.createTextNode(`${toN} / ${total}`));
      return;
    }
    const dur=850, start=performance.now();
    const bEl=ring.querySelector('b'), spanEl=ring.querySelector('span');
    function frame(now){
      const t=Math.min(1,(now-start)/dur), e=easeOutCubic(t);
      const curP=fromP+(toP-fromP)*e;
      const curN=Math.round(fromN+(toN-fromN)*e);
      ring.style.setProperty('--p',curP.toFixed(1)+'%');
      if(bEl) bEl.textContent=Math.round(curP)+'%';
      if(spanEl) spanEl.textContent=`${curN} / ${total}`;
      if(t<1){ringAnimHandle=requestAnimationFrame(frame)}
      else{
        ring.style.setProperty('--p',toP+'%');
        if(bEl) bEl.textContent=toP+'%';
        if(spanEl) spanEl.textContent=`${toN} / ${total}`;
        ringAnimHandle=null;
        if(toP>=100 && fromP<100){
          ring.classList.remove('burst'); void ring.offsetWidth; ring.classList.add('burst');
          setTimeout(()=>ring.classList.remove('burst'),1600);
        }
      }
    }
    ringAnimHandle=requestAnimationFrame(frame);
  }
  function updateRing(){
    const items=dayTasks(todayName()), p=pct(items.map(x=>x[0]),state.today); const ring=$('#view-home .ring');
    if(ring){
      const fromP=parseFloat(ring.style.getPropertyValue('--p'))||0;
      const spanEl=ring.querySelector('span');
      const fromN=spanEl?(parseInt((spanEl.textContent||'0').split('/')[0].trim(),10)||0):0;
      animateRingTo(ring,fromP,p.p,fromN,p.n,p.total);
    }
    $('#view-home .stat-card:nth-child(1) strong')?.replaceChildren(document.createTextNode(`${p.n}/${p.total}`));
    $('#view-home .stat-card:nth-child(2) strong')?.replaceChildren(document.createTextNode(String(Math.max(p.total-p.n,0))));
    const ws=weekSummary(), streak=computeStreak(), en=state.lang==='en';
    const wsCard=$('#view-home .stat-card:nth-child(5)'), streakCard=$('#view-home .stat-card:nth-child(6) strong');
    if(wsCard){ wsCard.title=`${ws.doneDays}/${ws.elapsed} ${en?'days':'أيام'}`; wsCard.querySelector('strong')?.replaceChildren(document.createTextNode(`${ws.pct}%`)); }
    streakCard?.replaceChildren(document.createTextNode(`${streak} ${en?'d':'يوم'}`));
  }
  window.toggleToday=toggleToday;window.togglePlan=togglePlan;window.updateRing=updateRing;
  function setWeeklyRating(v){state.weekly.rating=v;state.weekly.review=true;save();rerender()}
  window.setWeeklyRating=setWeeklyRating;

  function startFocus(id){
    const item=id?taskObjects().find(x=>x.id===id):nowNextLater()[0]; if(!item){infoModal(state.lang==='en'?'Core is complete.':'الأساسيات خلصت.');return;}
    const overlay=$('#focusMode'),shell=$('#focusShell'); overlay.classList.add('open');
    let end=Date.now()+(item.duration||25)*60000, done=false;
    function paint(){const left=Math.max(0,Math.ceil((end-Date.now())/1000));shell.querySelector('.focus-timer').textContent=`${String(Math.floor(left/60)).padStart(2,'0')}:${String(left%60).padStart(2,'0')}`;if(left<=0){if(!done){done=true;state.metrics.focusMinutes+=item.duration||25;state.metrics.sessions++;save()}return;} window.__mihrabFocusRAF=requestAnimationFrame(paint)}
    shell.innerHTML=`<div class="focus-kicker">${state.lang==='en'?'MIHRAB FOCUS':'تركيز مِحْرَاب'}</div><h2>${esc(item.label)}</h2><div class="focus-timer">25:00</div><div class="focus-actions"><button class="btn primary" onclick="finishFocus('${esc(item.id)}');closeFocus()">${state.lang==='en'?'Mark done':'تم'}</button><button class="btn" onclick="extendFocus(5)">+5m</button><button class="btn" onclick="closeFocus()">${state.lang==='en'?'Exit':'خروج'}</button></div>`;
    paint(); window.__mihrabFocusEnd=()=>end; window.__mihrabFocusPaint=paint;
  }
  function extendFocus(min){if(window.__mihrabFocusEnd){const end=window.__mihrabFocusEnd()+min*60000;window.__mihrabFocusEnd=()=>end;cancelAnimationFrame(window.__mihrabFocusRAF||0);window.__mihrabFocusPaint?.();}}
  function closeFocus(){$('#focusMode')?.classList.remove('open');cancelAnimationFrame(window.__mihrabFocusRAF||0);}
  function finishFocus(id){state.today[id]=true;save();closeFocus();rerender()}
  window.startFocus=startFocus;window.extendFocus=extendFocus;window.closeFocus=closeFocus;window.finishFocus=finishFocus;

  function openModal(html,variant){ensureModals();const m=$('#mihrabModal');m.innerHTML=html;m.className='mihrab-modal'+(variant?(' '+variant):'');$('#mihrabOverlay').classList.add('open');}
  function ensureModals(){if($('#mihrabOverlay'))return;document.body.insertAdjacentHTML('beforeend',`<div class="mihrab-overlay" id="mihrabOverlay" role="dialog" aria-modal="true"><div class="mihrab-modal" id="mihrabModal"></div></div><input id="mihrabImportInput" type="file" accept="application/json,.json" hidden><div class="focus-mode" id="focusMode"><div class="focus-shell" id="focusShell"></div></div>`)}
  function closeModal(){$('#mihrabOverlay')?.classList.remove('open')}
  window.closeMihrabModal=closeModal;
  function infoModal(message,title){const en=state.lang==='en';openModal(`<div class="mihrab-modal-head"><b>${esc(title||(en?'Note':'ملاحظة'))}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><p style="white-space:pre-line;line-height:1.9;margin:0 0 14px">${esc(message)}</p><div class="modal-actions"><button class="btn primary" onclick="closeMihrabModal()">${en?'OK':'تمام'}</button></div></div>`);}
  window.infoModal=infoModal;
  window.openQuickCapture=()=>openModal(`<div class="mihrab-modal-head"><b>${state.lang==='en'?'Quick Capture':'إضافة سريعة'}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><label class="field-lite"><span>${state.lang==='en'?'Idea / task':'الفكرة / المهمة'}</span><input id="captureText" autofocus></label><div class="form-grid"><label class="field-lite"><span>${state.lang==='en'?'Category':'القسم'}</span><select id="captureCat"><option value="other">${state.lang==='en'?'Other':'أخرى'}</option><option value="career">${state.lang==='en'?'Career':'مهني'}</option><option value="islamic">${state.lang==='en'?'Islamic':'شرعي'}</option><option value="course">${state.lang==='en'?'Course':'كورس'}</option></select></label><label class="field-lite"><span>${state.lang==='en'?'Minutes':'الدقائق'}</span><select id="captureDur"><option>5</option><option selected>15</option><option>30</option><option>45</option><option>60</option><option>90</option></select></label></div><div class="modal-actions"><button class="btn" onclick="closeMihrabModal()">${state.lang==='en'?'Cancel':'إلغاء'}</button><button class="btn primary" onclick="saveQuickCapture()">${state.lang==='en'?'Capture':'احفظ'}</button></div></div>`,'quick');
  window.saveQuickCapture=()=>{const text=$('#captureText')?.value.trim();if(!text)return;state.inbox.unshift({id:'in_'+Date.now().toString(36),text,category:$('#captureCat').value,duration:Number($('#captureDur').value)||15,status:'inbox',createdAt:new Date().toISOString()});save();closeModal();rerender()};
  window.completeInbox=id=>{const x=state.inbox.find(i=>i.id===id);if(x){x.status='done';x.doneAt=new Date().toISOString();save();rerender()}};
  window.deleteInbox=id=>{state.inbox=state.inbox.filter(i=>i.id!==id);save();rerender()};

  window.openCommandPalette=()=>{const en=state.lang==='en';openModal(`<div class="mihrab-modal-head"><input id="commandInput" placeholder="${en?'Search or run a command…':'ابحث أو نفّذ أمرًا…'}" oninput="filterCommands(this.value)"><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="command-list" id="commandList"></div>`);filterCommands('');requestAnimationFrame(()=>$('#commandInput')?.focus())};
  window.filterCommands=q=>{const list=$('#commandList');if(!list)return;const en=state.lang==='en';const items=[...NAV.map(x=>[x[0],en?x[3]:x[2],()=>navigate(x[0])]),['focus',en?'Start Focus':'ابدأ التركيز',startFocus],['capture',en?'Quick Capture':'إضافة سريعة',openQuickCapture],['smart15','15m',()=>smartTime(15)],['smart30','30m',()=>smartTime(30)],['export',en?'Export backup':'تصدير Backup',exportMihrab]].filter(x=>(x[0]+' '+x[1]).toLowerCase().includes((q||'').toLowerCase()));list.innerHTML=items.map(([id,label])=>`<button class="command-item" data-command="${id}"><span>${esc(label)}</span><small>↵</small></button>`).join('')||`<div class="note">${en?'No command found.':'مش لاقي الأمر ده.'}</div>`};
  document.addEventListener('click',e=>{const c=e.target.closest('[data-command]');if(!c)return;const id=c.dataset.command;closeModal();if(VIEWS.includes(id))return navigate(id);if(id==='focus')return startFocus();if(id==='capture')return openQuickCapture();if(id==='smart15')return smartTime(15);if(id==='smart30')return smartTime(30);if(id==='export')return exportMihrab();});

  function exportMihrab(){const blob=new Blob([JSON.stringify({app:'Mihrab',schemaVersion:state.schemaVersion,exportedAt:new Date().toISOString(),state},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`mihrab-backup-${keyDate()}.json`;a.click();URL.revokeObjectURL(a.href);state.backupAt=new Date().toISOString();save()}
  window.exportMihrab=exportMihrab;
  window.openImport=()=>$('#mihrabImportInput')?.click();
  $('#mihrabImportInput')?.addEventListener('change',e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const p=JSON.parse(r.result);const next=p.state||p;if(!next||typeof next!=='object')throw Error();state={...state,...next};ensureState();save();rerender();infoModal(state.lang==='en'?'Backup restored.':'تم استرجاع النسخة الاحتياطية.')}catch(err){infoModal(state.lang==='en'?'Invalid backup.':'النسخة الاحتياطية غير صالحة.')}};r.readAsText(f);});

  window.addContent=()=>openModal(`<div class="mihrab-modal-head"><b>${state.lang==='en'?'Add track / course':'إضافة مسار / كورس'}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><div class="form-grid"><label class="field-lite"><span>${state.lang==='en'?'Title':'الاسم'}</span><input id="libTitle"></label><label class="field-lite"><span>${state.lang==='en'?'English title':'الاسم بالإنجليزي'}</span><input id="libTitleEn"></label><label class="field-lite"><span>${state.lang==='en'?'Category':'القسم'}</span><select id="libCat"><option value="islamic">${state.lang==='en'?'Islamic':'شرعي'}</option><option value="career">${state.lang==='en'?'Career':'مهني'}</option><option value="course">${state.lang==='en'?'Course':'كورس'}</option><option value="reading">${state.lang==='en'?'Reading':'قراءة'}</option></select></label><label class="field-lite"><span>${state.lang==='en'?'Minutes':'الدقائق'}</span><input id="libDur" type="number" min="1" value="30"></label></div><label class="field-lite"><span>${state.lang==='en'?'Days':'الأيام'}</span><select id="libDays" multiple size="4">${DAYS.map(d=>`<option value="${d}">${state.lang==='en'?I18N[d]||d:d}</option>`).join('')}</select></label><div class="modal-actions"><button class="btn" onclick="closeMihrabModal()">${state.lang==='en'?'Cancel':'إلغاء'}</button><button class="btn primary" onclick="saveContent()">${state.lang==='en'?'Add':'إضافة'}</button></div></div>`);
  window.saveContent=()=>{const title=$('#libTitle')?.value.trim();if(!title)return;state.library.unshift({id:'lib_'+Date.now().toString(36),title,titleEn:$('#libTitleEn').value.trim(),category:$('#libCat').value,duration:Number($('#libDur').value)||30,days:[...$('#libDays').selectedOptions].map(o=>o.value),core:false,important:false,status:'active',sessions:0,completedSessions:0,createdAt:new Date().toISOString()});save();closeModal();rerender()};
  window.archiveContent=id=>{const x=state.library.find(i=>i.id===id);if(!x)return;const en=state.lang==='en';openModal(`<div class="mihrab-modal-head"><b>${en?'Archive this track?':'أرشفة هذا المسار؟'}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><p class="muted" style="margin:0 0 14px;line-height:1.8">${en?'It moves to the Paused tab — you can bring it back anytime.':'هينتقل لتبويب المتوقف — تقدر ترجّعه في أي وقت.'}</p><div class="modal-actions"><button class="btn" onclick="closeMihrabModal()">${en?'Cancel':'إلغاء'}</button><button class="btn primary" onclick="setLibraryStatus('${id}','paused')">${en?'Archive':'أرشفة'}</button></div></div>`);};
  window.completeContent=id=>setLibraryStatus(id,'done');
  window.activateContent=id=>setLibraryStatus(id,'active');window.setLibraryStatus=setLibraryStatus;
  function setLibraryStatus(id,status){const x=state.library.find(i=>i.id===id);if(x){
    if(status==='done'&&x.status!=='done') x.completedAt=new Date().toISOString();
    if(status!=='done'&&x.status==='done') delete x.completedAt;
    x.status=status;save();closeModal();rerender()}}
  window.editContent=id=>{const x=state.library.find(i=>i.id===id);if(!x)return;openModal(`<div class="mihrab-modal-head"><b>${state.lang==='en'?'Edit track':'تعديل المسار'}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><label class="field-lite"><span>${state.lang==='en'?'Title':'الاسم'}</span><input id="editTitle" value="${esc(x.title||'')}"></label><label class="field-lite"><span>${state.lang==='en'?'Minutes':'الدقائق'}</span><input id="editDur" type="number" min="1" value="${x.duration||30}"></label><div class="modal-actions"><button class="btn" onclick="closeMihrabModal()">${state.lang==='en'?'Cancel':'إلغاء'}</button><button class="btn primary" onclick="saveEditedContent('${id}')">${state.lang==='en'?'Save':'حفظ'}</button></div></div>`) };
  window.saveEditedContent=id=>{const x=state.library.find(i=>i.id===id);if(x){x.title=$('#editTitle').value.trim()||x.title;x.duration=Math.max(1,Number($('#editDur').value)||x.duration);save();closeModal();rerender()}};
  window.openTrackDetails=id=>{const x=state.library.find(i=>i.id===id);if(!x)return;const title=state.lang==='en'&&x.titleEn?x.titleEn:x.title;const d=x.days?.length?x.days.join(' · '):(state.lang==='en'?'Unscheduled':'غير مجدول');openModal(`<div class="mihrab-modal-head"><b>${esc(title)}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><div class="detail-grid"><div><small>Status</small><b>${esc(x.status)}</b></div><div><small>Duration</small><b>${x.duration||30} min</b></div><div><small>Schedule</small><b>${esc(d)}</b></div><div><small>Progress</small><b>${x.sessions?`${x.completedSessions||0}/${x.sessions}`:'Open'}</b></div></div></div>`)};

  function systemExtras(){
    const en=state.lang==='en', inbox=state.inbox.filter(x=>x.status==='inbox');
    const tabs=[['active',en?'Active':'نشط'],['paused',en?'Paused':'متوقف'],['done',en?'Done':'مكتمل']];
    const shown=state.library.filter(x=>x.status===libraryTab);
    const tabsHtml=tabs.map(([id,label])=>`<button class="lib-tab ${libraryTab===id?'active':''}" onclick="setLibraryTab('${id}')">${esc(label)} <span class="tiny muted">${state.library.filter(x=>x.status===id).length}</span></button>`).join('');
    const actionsFor=x=>x.status==='active'
      ?`<button class="tiny-action" onclick="editContent('${x.id}')">${en?'Edit':'تعديل'}</button><button class="tiny-action" onclick="completeContent('${x.id}')">${en?'Complete':'إنهاء'}</button><button class="tiny-action" onclick="archiveContent('${x.id}')">${en?'Archive':'أرشفة'}</button>`
      :`<button class="tiny-action" onclick="activateContent('${x.id}')">${en?'Reactivate':'استئناف'}</button>`;
    const list=shown.length?shown.map(x=>`<div class="library-item"><button class="library-title-btn" onclick="openTrackDetails('${x.id}')"><b>${esc(en&&x.titleEn?x.titleEn:x.title)}</b><span>↗</span></button><small>${esc(x.category)} · ${x.duration||30} min · ${(x.days||[]).join(' · ')|| (en?'Unscheduled':'غير مجدول')}</small><div class="library-meta"><span class="library-status ${x.status}">${tabs.find(t=>t[0]===x.status)?.[1]||x.status}</span>${actionsFor(x)}</div></div>`).join(''):`<div class="note">${en?'Nothing here yet.':'مفيش حاجة هنا لسه.'}</div>`;
    return `<section class="section-box lifecycle-card"><div class="section-title"><div><h2>${en?'Long-run system':'النظام على المدى الطويل'}</h2><p>${en?'The plan stays yours; content can evolve without editing code.':'الخطة ملكك، والمحتوى يتغير من غير لمس الكود.'}</p></div><button class="btn primary" onclick="addContent()">＋ ${en?'Add track':'إضافة مسار'}</button></div><div class="lib-tabs">${tabsHtml}</div><div class="library-list">${list}</div></section><div class="grid grid-2 lifecycle-grid"><section class="section-box"><h3>${en?'Inbox':'صندوق الوارد'}</h3><p class="muted">${en?'Quick ideas land here first.':'أي فكرة سريعة تدخل هنا الأول.'}</p>${inbox.length?inbox.slice(0,8).map(x=>`<div class="inbox-item"><div class="grow"><b>${esc(x.text)}</b><small>${x.duration}m</small></div><button class="tiny-action" onclick="completeInbox('${x.id}')">${en?'Done':'تم'}</button><button class="tiny-action" onclick="deleteInbox('${x.id}')">×</button></div>`).join(''):`<div class="note">${en?'Inbox is clear.':'صندوق الوارد فاضي.'}</div>`}<button class="btn" onclick="openQuickCapture()">＋ ${en?'Quick capture':'إضافة سريعة'}</button></section><section class="section-box"><h3>${en?'Backup & restore':'النسخ الاحتياطي'}</h3><p class="muted">${en?'Keep a JSON backup before moving devices or making major changes.':'خُد نسخة JSON قبل نقل الجهاز أو أي تغيير كبير.'}</p><div class="modal-actions"><button class="btn primary" onclick="exportMihrab()">${en?'Export JSON':'تصدير JSON'}</button><button class="btn" onclick="openImport()">${en?'Import':'استيراد'}</button></div></section></div>`;
  }
  const renderSystem=()=>renderSystemBase()+systemExtras();

  function bindThemePointer(){
    if(!window.matchMedia || !matchMedia('(pointer:fine)').matches) return; // touch devices get no benefit from a cursor-follow glow — skip the continuous recalculation entirely
    let raf=0,x=.62,y=.32,tx=x,ty=y;
    const tick=()=>{raf=0;x+=(tx-x)*.12;y+=(ty-y)*.12;document.documentElement.style.setProperty('--px',(x*100).toFixed(2)+'%');document.documentElement.style.setProperty('--py',(y*100).toFixed(2)+'%');if(Math.abs(tx-x)+Math.abs(ty-y)>.002)raf=requestAnimationFrame(tick)};
    window.addEventListener('pointermove',e=>{tx=e.clientX/Math.max(1,innerWidth);ty=e.clientY/Math.max(1,innerHeight);if(!raf)raf=requestAnimationFrame(tick)},{passive:true});tick();
  }

  migrate();librarySeeds();applyLanguage();applyTheme();ensureModals();
  const initial=validView((location.hash||'').slice(1)||state.view);route(initial,{scroll:false,push:false});
  bindThemePointer();
  // Day boundary was previously only checked at page load — if the tab/PWA stayed open across
  // the 5am cutoff, today's checklist (and now the history snapshot it feeds) would silently stay
  // stale until a manual reload. Poll cheaply, and catch up immediately when the tab regains focus.
  setInterval(()=>{ if(keyDate()!==state.todayDate){ resetDay(); rerender(); } },60000);
  document.addEventListener('visibilitychange',()=>{ if(!document.hidden && keyDate()!==state.todayDate){ resetDay(); rerender(); } });
})();


/* Ambient background: CSS animation + pointer fog, no canvas. */
(function(){const a=document.createElement('div');a.className='ambient-fx';a.setAttribute('aria-hidden','true');document.body.prepend(a);})();


/* PWA install */
let deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;document.querySelector('#installBtn')?.removeAttribute('disabled')});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;const b=document.querySelector('#installBtn');if(b){b.textContent='✓';b.disabled=true}});
window.installPWA=async()=>{if(deferredInstallPrompt){await deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;return;}infoModal(state.lang==='en'?'Use the browser menu and choose Install app / Add to Home Screen.':'من قائمة المتصفح اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».')};

window.addEventListener('load',()=>{if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});});
