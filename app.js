const RAFIQ_URL='https://rafiq-quran.pages.dev/';
const MOMENTUM_KEY='mihrab.dailyMomentum.v1';
const dayTypeToMode={كلية:'normal','بدون كلية':'busy','ديب وورك':'normal',راحة:'rest'};
const weekdayMapEn={'السبت':'Saturday','الأحد':'Sunday','الاثنين':'Monday','الثلاثاء':'Tuesday','الأربعاء':'Wednesday','الخميس':'Thursday','الجمعة':'Friday'};
const priorityRank={core:0,important:1,optional:2};
function activeMode(){return state.modeDate===keyDate()?state.mode:(dayTypeToMode[todayDayType()]||'normal')}
const durationFor={pr_f:5,pr_d:5,pr_a:5,pr_m:5,pr_i:5,azkar:10,bro:15,rafiq:10,quran:20,marketing:30,anki:20,easy:10,mouth:5,skin:5,hair:10,aw:30,zad:30,taj:20,azb:60,linkedin:30,review:15};
const coreIds=new Set(['pr_f','pr_d','pr_a','pr_m','pr_i','azkar','quran','rafiq','aw','zad']);
const priorityOf=id=>coreIds.has(id)?'core':(['marketing','anki','linkedin','azb'].includes(id)?'important':'optional');
function coreCompleteNow(){const items=dayTasks(todayName());const core=items.filter(([id])=>coreIds.has(id));return core.length>0&&core.every(([id])=>!!state.today[id])}



const MARKETING = [["المرحلة أولًاى: التأسيس، السيو، وفهم المريض", [["الأسبوع 1: أساسيات التسويق وأدوات 2026", ["اليوم 1 (عقلية المسوق): ليساهدة فيديو عن تعريف التسويق الحديث. | 🔍 What is Marketing basics video", "اليوم 2 (المزيج 4Ps): فهم الـ 4Ps لتطبيقها على الخدمات الطبية. | 🔍 The 4Ps of marketing mix tutorial", "اليوم 3 (التسويق الطبي): قراءة عن القيود وأخلاقيات تسويق الدواء. | 🔍 Healthcare marketing compliance", "اليوم 4 (الذكاء الاصطناعي): فيديو تطبيقي عن استخدام AI في التحليل. | 🔍 How to use AI in market research", "اليوم 5 (أبحاث السوق): استخدام AI لاستخراج بيانات عن سوق صيدلية الفيروز. | 🔍 AI prompt engineering for marketing"], ["الليسروع الموحد (ساعتين ونص): تطبيق الـ 4Ps وتحليل SWOT لـ (صيدلية الفيروز). (ادرس الـ SWOT بعدين اعمل تطبيق اليوم ده)", "تحدي الأسبوع (ساعة): حلّل إعلان طبي يعجبك واستخرج رسالته التسويقية.", "تحليل منافس (نص ساعة): تصفح صفحة منافس قوي لليسروعك ولاحظ نوعية المحتوى.", "البورتفوليو (نص ساعة): خذ Screenshot لشغلك وارفعها في Notion مع شرح (الليسكلة > الحل).", "اختبار (نص ساعة): اذكر 3 قيود أخلاقية لتسويق الأدوية (أضفها لـ Anki)."]], ["الأسبوع 2: رحلة العميل (Funnels)", ["اليوم 1 (شخصية العميل): استخدام قوالب Knowledge base Google Sheets لبناء Buyer Persona لمريض صيدلية الفيروز المثالي. | 🔍 How to create a buyer persona", "اليوم 2 (نموذج AIDA): ليساهدة شرح لمراحل AIDA وتأثيرها. | 🔍 AIDA model copywriting video", "اليوم 3 (قمع المبيعات): رسم قمع الـ TOFU, MOFU, BOFU. | 🔍 Marketing Funnel TOFU MOFU explained", "اليوم 4 (رحلة العميل): رسم خريطة مبسطة لمراحل رحلة مريض في صيدلية الفيروز. | 🔍 Customer journey mapping tutorial", "اليوم 5 (مقاييس الاستحواذ): حفظ معادلات الـ CAC و LTV وتطبيقاتها. | 🔍 CAC vs LTV marketing metrics"], ["الليسروع الموحد (ساعتين ونص): رسم قمع مبيعات (Funnel) يجذب الزوار لصيدلية الفيروز ويحولهم لعملاء دائمين.", "تحدي الأسبوع (ساعة): ابنِ شخصية عميل (Buyer Persona) مفصلة لعميلك المستهدف.", "تحليل منافس (نص ساعة): ادخل على منصة طبية (مثل Vezeeta) وحلل كيف ينقلون المستخدم من البحث للحجز.", "البورتفوليو (نص ساعة): ارفع رسمة الـ Funnel والـ Persona ضمن ملف ليسروعك.", "اختبار (نص ساعة): ما الفرق بين TOFU و BOFU؟"]], ["الأسبوع 3: تحسين محركات البحث (SEO)", ["اليوم 1 (أساسيات السيو): ليساهدة آلية عمل محركات البحث (Crawling & Indexing). | 🔍 How search engines work SEO video", "اليوم 2 (الكلمات المفتاحية): استخدام أدوات مجانية للبحث عن كلمات تخص استشارات الأدوية أونلاين. | 🔍 Keyword research medical SEO tutorial", "اليوم 3 (On-page SEO): فيديو تطبيقي لضبط عناصر الـ On-page (Title, H1). | 🔍 On-page SEO checklist guide", "اليوم 4 (Search Console): تصفح واجهة Google Search Console ومعرفة أهميتها. | 🔍 Google Search Console basics", "اليوم 5 (Local SEO): خطوات تحسين ملف Google Business Profile لصيدلية الفيروز في الأقصر. | 🔍 Google Business Profile optimization"], ["الليسروع الموحد (ساعتين ونص): استخراج 5 كلمات مفتاحية وكتابة هيكل مقال طبي يجلب زيارات لصيدلية الفيروز.", "تحدي الأسبوع (ساعة): استخدم AI لاقتراح 10 أفكار مقالات، وبعدين اختار إنت 3 منها بتقييمك الشخصي.", "تحليل منافس (نص ساعة): ابحث عن مقال طبي في الطبي Altibbi ولاحظ توزيع الكلمات المفتاحية والـ H2/H3.", "البورتفوليو (نص ساعة): ارفع تقرير الكلمات المفتاحية وهيكل المقال.", "اختبار (نص ساعة): ما أهمية Google Business Profile لعيادة أو صيدلية محلية؟"]]]], ["المرحلة الثانية: صناعة المحتوى والتواجد الرقمي", [["الأسبوع 4: تسويق المحتوى وكتابة الإعلانات", ["اليوم 1 (المحتوى الطبي): أساليب تبسيط المعلومات الطبية المعقدة للمرضى. | 🔍 Medical content writing tips", "اليوم 2 (الـ Copywriting): فيديو تطبيقي لكتابة نصوص بيعية مقنعة. | 🔍 Copywriting basics for beginners video", "اليوم 3 (العناوين Hooks): التدريب على صياغة Hooks تخطف الانتباه. | 🔍 Catchy headlines hooks copywriting", "اليوم 4 (اتخاذ إجراء CTA): دراسة جمل الـ CTA المناسبة للقطاع الصحي. | 🔍 Call to action examples medical", "اليوم 5 (Canva للتصميم): جولة بصرية في Canva لتصميم قوالب طبية احترافية. | 🔍 Canva for social media marketing tutorial"], ["الليسروع الموحد (ساعتين ونص): كتابة وتصميم 3 منشورات بيعية وتوعوية تُنشر على صفحة صيدلية الفيروز.", "تحدي الأسبوع (ساعة): اكتب 5 Hooks قوية لإعلان يروج لخدمة داخل الصيدلية.", "تحليل منافس (نص ساعة): راجع حسابات Eva Pharma وحلل طريقة صياغتهم للمحتوى ليكون جذاباً للمرضى.", "البورتفوليو (نص ساعة): ارفع التصميمات والنصوص (Copy).", "اختبار (نص ساعة): ما هو الـ Hook ولماذا هو الأهم في أي إعلان تسويقي؟"]], ["الأسبوع 5: منصات التواصل الاجتماعي", ["اليوم 1 (الخوارزميات): فيديو حديث يشرح خوارزميات Meta و TikTok. | 🔍 Social media algorithms update 2026", "اليوم 2 (التسويق B2B): جولة في LinkedIn لفهم كيفية بناء علاقات مع الأطباء. | 🔍 LinkedIn Marketing B2B tutorial", "اليوم 3 (الفيديوهات القصيرة): صياغة سكربت Reels سريع الإيقاع. | 🔍 Short form video marketing strategy", "اليوم 4 (تقويم المحتوى): فيديو تطبيقي لإنشاء Content Calendar. | 🔍 Social media content calendar setup", "اليوم 5 (إدارة المجتمعات): كيفية الرد الدبلوماسي على التقييمات الطبية السلبية. | 🔍 Community management handling negative reviews"], ["الليسروع الموحد (ساعتين ونص): إعداد Content Calendar متكامل لمدة شهر خاص بصفحة صيدلية الفيروز.", "تحدي الأسبوع (ساعة): صمم سيناريو جاهز (Template) للرد على أزمة لمريض يشتكي من خدمة طبية.", "تحليل منافس (نص ساعة): راجع صفحة Jamjoom Pharma أو شركة ليسابهة على LinkedIn ولاحظ المحتوى الـ B2B.", "البورتفوليو (نص ساعة): ارفع الـ Content Calendar بصيغة PDF.", "اختبار (نص ساعة): كيف توازن بين المحتوى التعليمي والبيعي في خطة الشهر؟"]]]], ["المرحلة الثالثة: الإعلانات المدفوعة والاختبارات", [["الأسبوع 6: إعلانات Meta و A/B Testing", ["اليوم 1 (سياسات الإعلانات): دراسة صارمة لسياسات Meta الخاصة بصحة الإنسان لتجنب الحظر. | 🔍 Meta Ads healthcare policies guide", "اليوم 2 (هيكل الحملة): فيديو يشرح واجهة مدير الإعلانات (Campaign > Ad Set > Ad). | 🔍 Facebook ads manager tutorial 2026", "اليوم 3 (A/B Testing): كيف تبرمج منصة الإعلانات لاختبار عنوانين مختلفين. | 🔍 A/B testing in Meta Ads setup", "اليوم 4 (التتبع والمقاييس): فهم دور الـ Conversions API ومعادلة ROAS. | 🔍 Meta Conversions API vs Pixel explained", "اليوم 5 (إطلاق الإعلان): ربط بطاقة الدفع وتجهيز الحملة الحقيقية لصيدلية الفيروز. | 🔍 How to launch first Facebook ad"], ["الليسروع الموحد (ساعتين ونص): إطلاق حملة تفاعل حقيقية (بميزانية 100-300 جنيه) لمحتوى توعوي خاص بصيدليتك ومراقبة أرقامها.", "تحدي الأسبوع (ساعة): صمم خطة A/B Test (صورتين مختلفتين وعنوانين) للحملة قبل إطلاقها.", "تحليل منافس (نص ساعة): استخدم Meta Ad Library للبحث عن إعلانات منافسيك المباشرين وحللها.", "البورتفوليو (نص ساعة): ارفع لقطات شاشة (Screenshots) توثق إعدادك للحملة ونتائجها أولًاية.", "اختبار (نص ساعة): ما الذي قد يسبب إغلاق حسابك الإعلاني فوراً في المجال الطبي؟"]], ["الأسبوع 7: إعلانات Google وتحسين التحويل (CRO)", ["اليوم 1 (Search Campaigns): فيديو يشرح واجهة إعلانات بحث جوجل (Google Ads). | 🔍 Google Search Ads tutorial", "اليوم 2 (Keyword Match): فهم دقيق لأنواع المطابقة (Broad, Phrase, Exact). | 🔍 Google Ads Keyword Match Types", "اليوم 3 (Quality Score): كيف تقلل تكلفة النقرة عبر تحسين نقاط الجودة. | 🔍 Google Ads Quality Score explained", "اليوم 4 (Landing Pages): فيديو يستعرض أفضل ممارسات صفحات الهبوط الطبية. | 🔍 Medical landing page UX breakdown", "اليوم 5 (Lead Magnets): التخطيط لمغناطيس إيميلات يجذب جمهور صيدلية الفيروز. | 🔍 Healthcare lead magnet ideas"], ["الليسروع الموحد (ساعتين ونص): تخطيط حملة بحث (Search Campaign) على جوجل لاستقطاب كلمات مفتاحية للصيدلية (مثل: استشارة دوائية أونلاين).", "تحدي الأسبوع (ساعة): ارسم هيكل ورقي (Wireframe) لصفحة هبوط مخصصة لاستقبال الزيارات من إعلان جوجل.", "تحليل منافس (نص ساعة): ابحث على جوجل عن خدمة طبية وحلل الإعلان (Ad) المتصدر في نتائج البحث.", "البورتفوليو (نص ساعة): ارفع خطة الكلمات المفتاحية وهيكل صفحة الهبوط.", "اختبار (نص ساعة): متى نستخدم Phrase Match بدلاً من Exact Match؟"]], ["الأسبوع 8: التحليلات وقراءة البيانات (Data Analytics)", ["اليوم 1 (تحليلات جوجل): استكشاف واجهة GA4 وفهم تقارير مصادر الزيارات. | 🔍 Google Analytics 4 dashboard tour", "اليوم 2 (التتبع الدقيق): فيديو يشرح إنشاء وتتبع الـ UTM Parameters. | 🔍 How to use UTM parameters tracking", "اليوم 3 (مقاييس الأداء): فهم مدلول الـ Bounce Rate ومقاييس التفاعل. | 🔍 GA4 engagement metrics explained", "اليوم 4 (Looker Studio): ليساهدة بناء لوحة تقارير (Dashboard) من الصفر. | 🔍 Looker Studio tutorial basics", "اليوم 5 (قراءة التقارير): جلب بيانات حملة Meta الفعلية (من الأسبوع 6) لتحليلها. | 🔍 How to analyze marketing campaign data"], ["الليسروع الموحد (ساعتين ونص): تحليل الأرقام الحقيقية لحملتك السابقة، واستخراج 3 رؤى (Insights) لتحسين الحملة القادمة لصيدلية الفيروز.", "تحدي الأسبوع (ساعة): أنشئ روابط متتبعة (UTM Links) لمنشورات الصيدلية، وارسم Dashboard بسيط للتقارير.", "تحليل منافس (نص ساعة): ابحث عن دراسة حالة (Case Study) لنجاح حملة تسويق طبي ولاحظ مقاييس النجاح المستخدمة.", "البورتفوليو (نص ساعة): ارفع تقرير تحليلك للحملة (الأرقام والدروس المستفادة).", "اختبار (نص ساعة): لماذا يفضل استخدام UTM Parameters دائماً في الإعلانات؟"]]]], ["المرحلة الرابعة: الاستراتيجية والانطلاق لسوق العمل", [["الأسبوع 9: الاستراتيجية الشاملة والتسويق المتخصص", ["اليوم 1 (B2B Medical): أساليب الـ Medical Detailing لاستهداف الأطباء. | 🔍 Medical sales representative skills", "اليوم 2 (الخطة الشاملة): فيديو يوضح كيفية دمج جميع قنوات التسويق معاً. | 🔍 Digital Marketing Strategy framework", "اليوم 3 (الأهداف الذكية): التدرب على صياغة أهداف بنموذج SMART لصيدلية الفيروز. | 🔍 SMART goals marketing examples", "اليوم 4 (مؤشرات KPIs): تحديد الـ KPIs الأساسية لمراقبة الخطة. | 🔍 Key Performance Indicators tracking", "اليوم 5 (توزيع الميزانية): أسس التخطيط المالي وتوزيع الميزانية على المنصات. | 🔍 Marketing budget allocation strategy"], ["الليسروع الموحد (ساعتين ونص): كتابة أهداف SMART، وتوزيع ميزانية ربع سنوية لصيدلية الفيروز على مختلف قنوات التسويق.", "تحدي الأسبوع (ساعة): صمم هيكل عرض تقديمي (Pitch Deck) لتقنع مستثمر بتمويل الخطة التسويقية للصيدلية.", "تحليل منافس (نص ساعة): حلل استراتيجية مركز طبي كبير ولاحظ كيف يربط محتوى منصاته ببعضها.", "البورتفوليو (نص ساعة): ارفع استراتيجية الميزانية وأهداف الـ SMART.", "اختبار (نص ساعة): ما هي الشروط الخمسة لكتابة هدف ذكي (SMART)؟"]], ["الأسبوع 10: دراسة الحالة النهائية والانطلاق لسوق العمل 🚀", ["اليوم 1 (الـ Portfolio): تجميع كافة مخرجات الأسابيع الـ 9 في دراسة حالة (Case Study) واحدة ضخمة تروي قصة بناء وتسويق صيدلية الفيروز من الصفر.", "اليوم 2 (الشهادات): استكمال وإنهاء مسار الشهادة الموازي (HubSpot/Google) - المفروض تكون قربت تخلص بما إنه كان بيليسي جنب الخطة من أولًا.", "اليوم 3 (LinkedIn): كتابة السيرة الذاتية لتعكس خبرتك المزدوجة، وإنشاء حساب لينكد إن احترافي، ونشر الـ Case Study الخاصة بك.", "اليوم 4 (المقابلات): التحضير لأسئلة مقابلات التسويق الطبي، وتجهيز رسالة تغطية (Cover Letter) مخصصة.", "اليوم 5 (التقديم): التقديم الفعلي والمركز على 10-20 فرصة عمل حر أو Internship ذات جودة عالية."], ["تحدي التخرج (5 ساعات): افتح Anki، قُم بتفريغ ومراجعة كافة البطاقات المتراكمة لترسيخ المفاهيم التي ستواجهك في المقابلات الوظيفية، ثم تأكد من أن الـ Portfolio الخاص بك يعمل بشكل مثالي كـ Link للليساركة.", "اليوم 7: أغلق اللاب توب، احتفل بهذا الإنجاز الضخم، واستعد لاستقبال أول عميل! 🎉"]]]]];
const PRIORITY = ["⭐⭐⭐ لازم يتحفظ: 4Ps، STP، SWOT، AIDA، Marketing Funnel (TOFU/MOFU/BOFU)، Buyer Persona، USP، CTA، SEO (On-page / Off-page / Technical)، CAC، LTV، CTR، CPC، CPM، ROAS، Conversion Rate، UTM، SMART، KPIs.", "⭐⭐ يتفهم ويتطبق: تعريف AMA، تاريخ التسويق، Marketing 1.0/2.0/3.0/5.0، قصة التطور، أمثلة الشركات.", "⭐ يُرجع إليه عند الحاجة: الإحصائيات، الدراسات، والأمثلة الطويلة."];
const DAYS=['السبت','الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة'];
const JS_WEEKDAY_AR=['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
const ICON_PATHS={home:'<path d="M4 10.5 12 4l8 6.5"/><path d="M6.5 9.5V19h11V9.5"/><path d="M9.5 19v-5h5v5"/>',execution:'<rect x="4" y="4" width="16" height="16" rx="4"/><path d="m8 12 2.2 2.2L16 8.5"/>',focus:'<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',progress:'<path d="M5 19V9M12 19V5M19 19V2"/><path d="M3 19h18"/>',system:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><circle cx="12" cy="12" r="4"/>',marketing:'<path d="M4 16V8l9-3v14l-9-3Z"/><path d="M13 9h5l2 2v2l-2 2h-5"/><path d="M7 16v3"/>',shari:'<path d="M12 4c-2.6 2.2-5.1 3.6-7 4.4v3.8c0 4.1 3 6.6 7 7.8 4-1.2 7-3.7 7-7.8V8.4C17.1 7.6 14.6 6.2 12 4Z"/><path d="M9 12.2 11 14l4-4"/>',quran:'<path d="M6 4.5c2.3 0 4.3.7 6 2.1v12c-1.7-1.4-3.7-2.1-6-2.1H4V4.5h2Z"/><path d="M18 4.5c-2.3 0-4.3.7-6 2.1v12c1.7-1.4 3.7-2.1 6-2.1h2V4.5h-2Z"/>',courses:'<path d="M4 7.5 12 4l8 3.5-8 3.5-8-3.5Z"/><path d="M7 10v5.2c2.9 2.3 7.1 2.3 10 0V10"/><path d="M20 9v6"/>',book:'<path d="M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z"/><path d="M17 20h2a1 1 0 0 0 1-1V7a3 3 0 0 0-3-3"/>',spark:'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/>',pause:'<path d="M8 5v14M16 5v14"/>',check:'<path d="m5 12 4 4L19 6"/>',target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',brain:'<path d="M8.5 5.2A3.2 3.2 0 0 1 12 3a3.2 3.2 0 0 1 3.5 2.2A3.5 3.5 0 0 1 19 8.6 3.4 3.4 0 0 1 17.8 15a3.2 3.2 0 0 1-5.8 1.7A3.2 3.2 0 0 1 6.2 15 3.4 3.4 0 0 1 5 8.6a3.5 3.5 0 0 1 3.5-3.4Z"/><path d="M12 6v9M8.5 8.5h3M15.5 11.5H12"/>',filter:'<path d="M4 6h16M7 12h10M10 18h4"/>',personal:'<circle cx="12" cy="8" r="3"/><path d="M5 20c.8-3.7 3.1-5.6 7-5.6s6.2 1.9 7 5.6"/>'};
function icon(name){const d=ICON_PATHS[name]||ICON_PATHS.spark;return `<svg class="mihrab-icon" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">${d}</g></svg>`}
function stripLeadingEmoji(s){return String(s).replace(/^[\u2000-\u32ff\ud800-\udfff\ufe0f]+\s*/,'').trim()}
function taskIconFor(id){if(['quran','rafiq'].includes(id))return'quran';if(['aw','zad','taj','azb'].includes(id))return'shari';if(['marketing','linkedin','anki'].includes(id))return'marketing';if(['pr_f','pr_d','pr_a','pr_m','pr_i','azkar','bro'].includes(id))return'shari';if(['mouth','skin','hair'].includes(id))return'personal';return'target'}
const NAV=[['home','home','اليوم','Today'],['execution','execution','التنفيذ','Execution'],['focus','focus','التركيز','Focus'],['progress','progress','التقدم','Progress'],['system','system','النظام','System']];
const LEGACY_VIEWS=['marketing','shari','quran','courses'];
const AREA_DEFS=[['study','الدراسة','Study','book'],['quran','القرآن','Qur’an','quran'],['islamic','العلم الشرعي','Islamic','shari'],['career','التسويق','Career','marketing'],['personal','الشخصي','Personal','spark']];
const PRAYER_IDS=[['pr_f','الفجر','Fajr'],['pr_d','الظهر','Dhuhr'],['pr_a','العصر','Asr'],['pr_m','المغرب','Maghrib'],['pr_i','العشاء','Isha']];
const SHARI_MAP={'السبت':'زاد (تفريغ) + أحمد السيد + أيمن عبد الرحيم','الأحد':'زاد (تفريغ) + فقه النفس + السرجاني','الاثنين':'زاد (تفريغ) + أحمد السيد + أيمن عبد الرحيم','الثلاثاء':'زاد (تفريغ) + فقه النفس + السرجاني','الأربعاء':'زاد (تفريغ) + أحمد السيد + أيمن عبد الرحيم','الخميس':'زاد (تفريغ) + فقه النفس + السرجاني','الجمعة':'زاد (3 محاضرات) + تدبر (أحمد عبد المنعم)'};
const AWARENESS=[1,2,3,4,5,6,7,8,9];
const OLD_KEY='dersh-integrated-v4';
const KEY='study-dashboard-focus-v7';
let state={theme:'mono',lang:'ar',view:'home',dayType:'كلية',todayDate:'',today:{},plan:{},weekly:{marketingHours:0,mckinsey:false,dose:false,review:false,rating:'',cert:false},weekDayTypes:{},quranFrameOpen:false,mode:'normal',modeDate:'',schemaVersion:5,settings:{lowPower:false},inbox:[],library:[],backupAt:'',metrics:{focusMinutes:0,sessions:0},history:{events:[],series:{},milestones:[],plans:{}},dailyMomentum:{date:'',index:0},projects:[{id:'p_marketing',name:'معسكر التسويق الطبي الرقمي',area:'career',status:'active',progress:0}],areas:[],worship:{prayerNotes:{},sunnah:{},fasts:{},dhikr:{date:'',count:0}}};
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function effectiveDate(){const d=new Date();if(d.getHours()<5)d.setDate(d.getDate()-1);return d}
function localDateKey(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function keyDate(){return localDateKey(effectiveDate())}
function ensureDailyPlanSnapshot(){const k=keyDate();state.history ||= {events:[],series:{},milestones:[]};state.history.plans ||= {};if(!state.history.plans[k]) state.history.plans[k]=dayTasks(todayName()).map(([id])=>id)}
function resetDay(){const k=keyDate();if(state.todayDate!==k){state.todayDate=k;state.today={};} ensureDailyPlanSnapshot(); save()}
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
 aw:'Building the Contemporary Muslim’s Awareness — today’s session',zad:'Zad Academy — 3 lectures',taj:'Tajweed — video',azb:'Al-Azbi training transcription into Anki — ~1 hour',linkedin:'Weekly LinkedIn post',review:'Weekly review — 10–15 minutes'
};
function taskHTML(items){return '<div class="tasks">'+items.map(([id,text])=>{const done=tChecked(id);const badge=taskBadge(id);const label=(state.lang==='en'&&TASK_EN[id])?TASK_EN[id]:text;const clean=stripLeadingEmoji(label);const ic=ICON_PATHS[taskIconFor(id)]?icon(taskIconFor(id)):icon('target');return `<div class="task-item ${done?'done':''}" data-task-id="${esc(id)}"><input type="checkbox" id="task_${esc(id)}" data-today-id="${esc(id)}" ${done?'checked':''}><label class="task-text" for="task_${esc(id)}"><span class="task-leading-icon">${ic}</span><span>${esc(clean)}</span></label>${badge?`<span class="mihrab-badge badge-${badge[1]}">${esc(badge[0])}</span>`:''}</div>`}).join('')+'</div>'}
function taskObjects(){
  const items=dayTasks(todayName()).filter(([id])=>{
    const m=activeMode(), p=priorityOf(id);
    if(m==='rest') return false;
    if(m==='survival') return coreIds.has(id);
    if(m==='exam') return p==='core'||id==='marketing';
    if(m==='busy') return p!=='optional';
    return true;
  }).map(([id,text])=>({id,label:stripLeadingEmoji(text),duration:durationFor[id]||15,priority:priorityOf(id),done:tChecked(id)}));
  state.library.filter(x=>x.status==='active'&&!x.systemSeed&&Array.isArray(x.days)&&x.days.includes(todayName())).forEach(x=>items.push({
    id:x.id,label:state.lang==='en'&&x.titleEn?x.titleEn:x.title,duration:x.duration||15,
    priority:x.core?'core':x.important?'important':'optional',done:!!state.today[x.id],custom:true
  }));
  return items;
}

function dayTasks(day){
 const base=[['pr_f','🕌 الفجر — في وقتها'],['pr_d','🕌 الظهر — في وقتها'],['pr_a','🕌 العصر — في وقتها'],['pr_m','🕌 المغرب — في وقتها'],['pr_i','🕌 العشاء — في وقتها'],['azkar','📿 أذكار الصباح والمساء + الدعاء للأهل والأموات'],['bro','🤲 ورد أخي — قرآن / قيام / أذكار'],['rafiq','✨ ليسروع رفيق القرآن'],['quran','📖 مراجعة القرآن — المصلى بين المحاضرات/السكاشن أو المواصلات'],['marketing','💻 التسويق — '+marketingTarget()],['anki','🧠 Anki — المستحق أولًا، والجديد حسب الميزانية'],['easy','📗 EasyPeasy Way to Quit — قراءة اليوم'],['mouth','🪥 روتين الفم — صباحًا ومساءً'],['skin','🧴 روتين البشرة — صباحًا ومساءً'],['hair','💆 روتين الشعر — حسب روتينك']];
 const extra={'السبت':[['aw','🧭 تأسيس وعي المسلم المعاصر — جلسة اليوم'],['zad','🎓 أكاديمية زاد — 3 محاضرات']], 'الأحد':[['taj','🎙️ التجويد (فيديو)'],['azb','📝 تفريغ تدريب العزبي في Anki — ~ساعة'],['linkedin','📝 بوست LinkedIn الأسبوعي'],['zad','🎓 أكاديمية زاد — 3 محاضرات']], 'الاثنين':[['aw','🧭 تأسيس وعي المسلم المعاصر — جلسة اليوم'],['zad','🎓 أكاديمية زاد — 3 محاضرات']], 'الثلاثاء':[['taj','🎙️ التجويد (فيديو)'],['azb','📝 تفريغ تدريب العزبي في Anki — ~ساعة'],['zad','🎓 أكاديمية زاد — 3 محاضرات']], 'الأربعاء':[['aw','🧭 تأسيس وعي المسلم المعاصر — جلسة اليوم'],['zad','🎓 أكاديمية زاد — 3 محاضرات']], 'الخميس':[['taj','🎙️ التجويد (فيديو)'],['azb','📝 تفريغ تدريب العزبي في Anki — ~ساعة'],['zad','🎓 أكاديمية زاد — 3 محاضرات']], 'الجمعة':[['aw','🧭 تأسيس وعي المسلم المعاصر — حصة أطول'],['review','🔍 المراجعة الأسبوعية — 10–15 دقيقة ليلاً'],['zad','🎓 أكاديمية زاد — اختياري: تعويض محاضرة فاتت فقط']]};
 return base.concat(extra[day]||[])
}
function shariItems(day){if(day==='الجمعة')return [['sz1','زاد — محاضرة 1'],['sz2','زاد — محاضرة 2'],['sz3','زاد — محاضرة 3'],['st','تدبر — أحمد عبد المنعم']];const raw=SHARI_MAP[day]||'';const arr=raw.replace(/^زاد \(تفريغ\) \+ /,'').split(' + ');return [['z','زاد — محاضرة اليوم'],['s2',arr[0]||'المصدر الثاني'],['s3',arr[1]||'المصدر الثالث']]}
function applyLanguage(){document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==='en'?'ltr':'rtl';document.body.dataset.lang=state.lang;document.body.dataset.theme=state.theme;document.documentElement.style.colorScheme=state.theme==='paper'?'light':state.theme==='system'?(window.matchMedia?.('(prefers-color-scheme: light)').matches?'light':'dark'):'dark';const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=getComputedStyle(document.body).getPropertyValue('--bg').trim()||'#0b0f12';const tag=document.getElementById('brandTagline');if(tag)tag.textContent=state.lang==='en'?'Build yourself. Create impact. Earn independence.':'بناء النفس، وصناعة الأثر، وتحقيق الاستقلال.';}
const I18N={
'اليوم':'Today','التنفيذ':'Execution','التركيز':'Focus','التقدم':'Progress','النظام':'System',
'Mihrab':'Mihrab',
'التفاصيل':'Details','تعديل':'Edit','أرشفة':'Archive','إنهاء':'Complete','نشط':'Active','مكتمل':'Completed','إيقاع الغرفة الأسبوعي':'WEEKLY RHYTHM','إيقاع الغرفة':'ROOM RHYTHM','الأسبوعي':'Weekly','غرفة':'Room','أساسي':'Core','مهم':'Important','اختياري':'Optional','متوقف':'Paused','استئناف':'Resume','إيقاف':'Pause','مكتبة':'Library','المسارات النشطة':'ACTIVE TRACKS','المتوقف / المؤرشف':'PAUSED / ARCHIVED','مكتمل / منجز':'COMPLETED / ACHIEVED','لا توجد مسارات نشطة حاليًا.':'Nothing active yet.','لا توجد مسارات متوقفة.':'No paused tracks.','لا توجد مسارات مكتملة مسجلة بعد.':'No completed tracks have been recorded yet.','مراجعة أسبوعية':'Weekly review','لم يُقيَّم':'Not rated','محفوظ':'Saved','اختر':'Choose','المراجعة':'Review','المراجعة الأسبوعية':'WEEKLY REVIEW','هوية اللوحة':'Board identity','الثيمات واللغة ونوع كل يوم هنا. الخطة نفسها تظل ثابتة.':'Themes, language, and day types live here. The plan itself stays fixed.','سؤال هادئ للأسبوع.':'A quiet question for the week.','ما الذي التزمت به بسهولة؟ وما الذي استمر يتأجل؟ وما الذي ستخففه أو تثبته الأسبوع القادم؟':'What was easy to sustain, what kept slipping, and what will you reduce or lock in next week?','متاح':'Available','غير متاح':'Unavailable','متصل':'Online','غير متصل':'Offline',
'بناء النفس، وصناعة الأثر، وتحقيق الاستقلال.':'Build yourself. Create impact. Earn independence.',

'لوحة واحدة':'One dashboard','Mihrab':'Mihrab','مركز اليوم':'Today','التسويق':'Marketing','العلم الشرعي':'Islamic Studies','القرآن':'Qur’an','الكورسات':'Courses','النظام':'System',
'رتّب يومك.':'Shape your day.','وابنِ مستقبلك بهدوء.':'Build your future calmly.','وخليه بسيط.':'Keep it simple.','باقي':'Remaining','بنود باقية':'items left','خلصت يومك':'You are done for today','الأساسيات أولًا.':'Essentials first.','بعدها':'Next','قاعدة اليوم':'Today’s rule','مهمة التسويق':'Marketing task','محتوى الشرعي':'Islamic content','بدّل بين العربية والإنجليزية متى شئت.':'Switch between Arabic and English at any time.','جميل':'Beautiful','مركز واحد لكل ما تحتاجه اليوم: الأساسيات الدينية والقرآن، ثم التسويق كأولوية مهنية، والكورسات المساندة بدون ما تتحول اللوحة نفسها إلى عبء.':'One place for today: faith, Qur’an, professional marketing, and supporting courses — without turning the board into another burden.',
'إنجاز اليوم':'Today’s progress','جرعة التسويق اليوم':'Today’s marketing dose','ابدأ تنفيذ اليوم ↓':'Start today ↓','الخطة المهنية ↗':'Career plan ↗','الشرعي ↗':'Islamic plan ↗','أسبوعك في لقطة':'Your week at a glance','اختار نوع كل يوم مرة واحدة من النظام، واللوحة تستخدمه تلقائيًا.':'Set each day type once in System, and the board uses it automatically.','تنفيذ اليوم':'Today’s execution','لا تعويض اندفاعي.':'No catch-up sprint.','الأساسيات أولًا':'Essentials first','قائمة اليوم':'Today’s list','ماذا بعد؟':'What’s next?','افتح مهمة التسويق التفصيلية':'Open detailed marketing task','افتح محتوى اليوم الشرعي':'Open today’s Islamic content','افتح مراجعة القرآن + رفيق':'Open Qur’an review + Rafiq','ثلاث قواعد':'Three rules','المراجعات قبل الجديد':'Reviews before new cards','الشرعي والقرآن لا يُقصّان':'Islamic studies + Qur’an stay protected','McKinsey + Dose أول ما يتقلص':'McKinsey + Dose shrink first',
'التسويق هذا الأسبوع':'Marketing this week','هدف الأسبوع':'Weekly target','الشرعي':'Islamic studies','مراجعة':'Review','مساندة لا تسبق الأساسيات.':'Support work never outranks essentials.','الأساسيات الدينية والقرآن، ثم التسويق كأولوية مهنية، والكورسات المساندة':'faith and Qur’an first, then professional marketing and supporting courses','كل يوم مرة واحدة':'once for each day','المراجعة المستحقة أولًا':'Due reviews first','الجديد حسب الميزانية':'New cards within budget','في وقتها':'On time','أذكار الصباح والمساء + الدعاء للأهل والأموات':'Morning/evening adhkar + supplication for family and the deceased','ورد أخي — قرآن / قيام / أذكار':'Brother’s wird — Qur’an / night prayer / adhkar','مراجعة القرآن':'Qur’an review','المصلى بين المحاضرات/السكاشن أو المواصلات':'prayer room between lectures/sections or during transit','قراءة اليوم':'Today’s reading','روتين الفم — صباحًا ومساءً':'Oral-care routine — morning & evening','روتين البشرة — صباحًا ومساءً':'Skincare routine — morning & evening','روتين الشعر — حسب روتينك':'Hair routine — according to your routine',
'معسكر التسويق الطبي الرقمي':'Digital Medical Marketing Bootcamp','أولوية مهنية':'Professional priority','طريقة اليوم':'Daily method','Buffer Rule':'Buffer Rule','التقدم الكلي':'Overall progress','تقدم الأسبوع':'Weekly progress','أيام التعلم':'Learning days','التطبيق العميق':'Deep application','نظام Anki داخل المعسكر':'Anki system in the bootcamp','بوابة إنشاء البطاقة':'Card creation gate','معيار نجاح الليسروع':'Project success criterion','بعد الأسبوع 10':'After week 10','مؤجل إلى ما بعد معسكر التسويق.':'Deferred until after the marketing bootcamp.',
'مسار مستقل وثابت. لا يدخل في منافسة مع التسويق.':'A fixed, independent track. It does not compete with marketing.','أساسي':'Core','المصادر الأساسية':'Core sources','ترتيب المسارات':'Track order','تنفيذ اليوم الشرعي':'Today’s Islamic execution','تأسيس وعي المسلم المعاصر':'Building the Contemporary Muslim’s Awareness','هدف الدورة':'Course goal','مكانها في الخطة':'Place in the plan','المحاضرة':'Lecture','من 9':'of 9','تنبيه':'Note','الجمعه':'Friday','جلسة أطول + تدبر':'Longer session + reflection',
'مساحة مراجعة هادئة':'A quiet review space','لا حفظ جديد أثناء الدراسة؛ الاتصال بالمحفوظ هو الهدف.':'No new memorization during university; staying connected to what you memorized is the goal.','مراجعة اليوم':'Today’s review','رفيق القرآن داخل نفس التجربة':'Rafiq inside the same experience','الوصول إلى رفيق القرآن من هنا، بدون ما تحوّل اللوحة إلى نسخة منه.':'Access Rafiq from here without turning this board into a copy of it.',
'الكورسات والأنظمة المساندة':'Courses & supporting systems','المراجعة المستحقة أولًا. الجديد بميزانية ثابتة. أماكنه المفضلة: المواصلات، المصلى، والفواصل.':'Due reviews first. New cards stay within a fixed budget. Best moments: transit, prayer room, and gaps.','حوالي ساعتين أسبوعيًا. أول ما ينكمش عند ضغط الدراسة.':'About two hours weekly. One of the first things to shrink under pressure.','أنجزت نصيب الأسبوع':'Finished this week’s share','بالتوازي مع المعسكر':'Alongside the bootcamp','أنجزت نصيب الشهادة الموازية':'Finished this week’s parallel certificate share','يظل موجودًا كقراءة خفيفة داخل اليوم، ولا يضخم الخطة الرئيسية.':'Keep it as light daily reading without bloating the main plan.','الأنظمة المساندة':'Supporting systems',
'النظام والمراجعة':'System & review','هنا تضبط طريقة تشغيل اللوحة بدل ما تغيّر الخطة نفسها.':'Tune how the board runs here without changing the plan itself.','شكل اللوحة':'Board appearance','الثيم يغيّر الخلفية، البطاقات، الحواف، الظلال، الإضاءة وطابع الواجهة — وليس مجرد لون زر.':'The theme changes the background, cards, borders, shadows, glow, and overall feel — not just a button color.','نوع كل يوم':'Day type','يحدد جرعة التسويق لذلك اليوم':'Sets that day’s marketing dose','تشغيل':'On','المرجع':'Reference','التقييم الأسبوعي':'Weekly review','اختر تقييمك الحقيقي للأسبوع؛ يُحفظ الاختيار ويُسجَّل في المراجعة الأسبوعية.':'Choose your real weekly rating — it saves and counts as the weekly review.','محفوظ':'Saved','لم يُقيَّم':'Not rated','مراجعة أسبوعية':'Weekly review','الساعات':'Hours','أدخل الساعات الفعلية':'Enter actual hours','أوضاع الطاقة':'Energy modes','قواعد التشغيل':'Operating rules',
'السبت':'Saturday','الأحد':'Sunday','الاثنين':'Monday','الثلاثاء':'Tuesday','الأربعاء':'Wednesday','الخميس':'Thursday','الجمعة':'Friday',
'كلية':'College','بدون كلية':'No college','ديب وورك':'Deep work','راحة':'Rest','غير محدد':'Not set','ممتاز':'Excellent','جيد جدًا':'Very good','متذبذب':'Unstable','أسبوع طوارئ':'Emergency week','80–90%+ والتقدم ثابت':'80–90%+ and steady progress','يسير جيدًا مع بعض التعثر':'Going well with some friction','هناك حاجة محتاجة تعديل':'Something needs adjustment','كانت أولًاوية للضروريات':'Essentials had priority',
'ملاحظة الدورة':'Course note','Module':'Module',
'✨ ليسروع رفيق القرآن':'✨ Rafiq Qur’an project','📖 مراجعة القرآن — المصلى بين المحاضرات/السكاشن أو المواصلات':'📖 Qur’an review — prayer room between lectures/sections or transit',
'زاد (تفريغ) + أحمد السيد + أيمن عبد الرحيم':'ZAD (notes) + Ahmed Al-Sayed + Ayman Abdel Rahim','زاد (تفريغ) + فقه النفس + السرجاني':'ZAD (notes) + Fiqh al-Nafs + Al-Sarjani','زاد (3 محاضرات) + تدبر (أحمد عبد المنعم)':'ZAD (3 lectures) + reflection (Ahmed Abdel Moneim)','حوالي 70–85 دقيقة':'About 70–85 minutes','جلسة أطول + تدبر':'Longer session + reflection','تدبر':'Reflection','فقه النفس':'Fiqh al-Nafs','السرجاني':'Al-Sarjani','أحمد السيد':'Ahmed Al-Sayed','أيمن عبد الرحيم':'Ayman Abdel Rahim','زاد':'ZAD','أحمد عبد المنعم':'Ahmed Abdel Moneim','مصادر أساسية':'Core sources','المسارات اللاحقة':'Later tracks','الجمعة':'Friday','التسويق الطبي الرقمي':'Digital medical marketing','العلم الشرعي':'Islamic studies','القرآن':'Qur’an','الكورسات':'Courses','النظام':'System',
}
function t(ar,en){
 const key=String(ar||'').trim();
 const translated=I18N[key];
 if(typeof translated==='string' && translated.length) return state.lang==='en'?translated:key;
 if(state.lang==='en' && typeof en==='string') return en;
 if(!translated && typeof en==='string') I18N[key]=en;
 return state.lang==='en'?en:key;
}
function translateText(t)
{let s=t;const exact=I18N[s.trim()];if(exact)return exact;return s
 .replaceAll('السبت','Saturday').replaceAll('الأحد','Sunday').replaceAll('الاثنين','Monday').replaceAll('الثلاثاء','Tuesday').replaceAll('الأربعاء','Wednesday').replaceAll('الخميس','Thursday').replaceAll('الجمعة','Friday')
 .replaceAll('اليوم','Today').replaceAll('الأسبوع','Week').replaceAll('المحاضرات','lectures').replaceAll('محاضرة','lecture')
 .replaceAll('جلسة','session').replaceAll('حوالي','About').replaceAll('دقيقة','min').replaceAll('ساعة','h').replaceAll('تقدم','Progress').replaceAll('مهمة','task').replaceAll('المحتوى','Content').replaceAll('ملاحظة','Note');}
function translateRendered(){}
function applyTheme(){applyLanguage();document.body.dataset.theme=state.theme;document.documentElement.style.colorScheme=state.theme==='paper'?'light':state.theme==='system'?(window.matchMedia?.('(prefers-color-scheme: light)').matches?'light':'dark'):'dark'}
function setTheme(t){const allowed=['aurora','midnight','sunrise','paper','mono','system'];state.theme=allowed.includes(t)?t:'mono';save();applyTheme();renderAll({preserveScroll:true})}
function cycleTheme(){const arr=['aurora','midnight','sunrise','paper','mono','system'];setTheme(arr[(arr.indexOf(state.theme)+1)%arr.length])}
function dailyMomentum(){
 const today=new Date().toISOString().slice(0,10);
 const messages=state.lang==='en'?[
  'Protect the essentials. Let the useful work accumulate.',
  'Choose the next meaningful thing — not everything at once.',
  'A quiet day can still move your life forward.',
  'Keep the foundation steady. The rest can wait for space.',
  'Small, deliberate progress is enough for today.'
 ]:[
  'احفظ الأساسيات، وسيب الشغل النافع يتراكم بهدوء.',
  'اختر أهم خطوة قادمة، لا كل الخطوات دفعة واحدة.',
  'اليوم الهادئ يقدر برضه يحرّك حياتك لقدّام.',
  'ثبّت الأساس، والباقي ياخد مساحته لما تفضى.',
  'التقدم الهادئ المتعمد كفاية لليوم.'
 ];
 let persisted=null;
 try{ persisted=JSON.parse(localStorage.getItem(MOMENTUM_KEY)||'null'); }catch{}
 if(!persisted || persisted.date!==today || !Number.isInteger(persisted.index)){
  let seed=0; for(let i=0;i<today.length;i++) seed=(seed*31+today.charCodeAt(i))>>>0;
  persisted={date:today,index:seed%messages.length};
  try{localStorage.setItem(MOMENTUM_KEY,JSON.stringify(persisted));}catch{}
 }
 state.dailyMomentum={date:persisted.date,index:persisted.index};
 return messages[state.dailyMomentum.index]||messages[0];
}
function renderHome(){
 const day=todayName(), items=dayTasks(day), pr=pct(items.map(x=>x[0]),state.today);
 const done=pr.n, total=pr.total, remaining=Math.max(total-done,0), en=state.lang==='en';
 const modeLabel=activeMode()==='busy'?(en?'Busy':'مشغول'):activeMode()==='exam'?(en?'Exam':'امتحان'):activeMode()==='survival'?(en?'Survival':'نجاة'):activeMode()==='rest'?(en?'Rest':'راحة'):(en?'Normal':'طبيعي');
 const pending=taskObjects().filter(x=>!x.done).sort((a,b)=>priorityRank[a.priority]-priorityRank[b.priority]||a.duration-b.duration);
 const now=pending[0], next=pending[1], later=pending[2];
 const label=x=>x?esc(x.label):(en?'Nothing queued.':'لا شيء متبقٍ.');
 const longStats=consistencyMetrics('week');
 const rooms=[
  ['marketing','marketing',en?'Marketing':'التسويق',en?'Craft your professional edge.':'غرفة صناعة الأثر المهني.'],
  ['shari','shari',en?'Islamic Studies':'العلم الشرعي',en?'Roots, clarity, understanding.':'جذورك: علم ووعي وفهم.'],
  ['quran','quran',en?'Qur’an':'القرآن',en?'A quiet place to stay connected.':'موضع هادئ للصلة بالمحفوظ.'],
  ['courses','courses',en?'Courses':'الكورسات',en?'Supporting systems, kept in their place.':'أنظمة مساندة، بلا زحام.'],
  ['system','system',en?'System':'النظام',en?'Tune the world around you.':'اضبط طريقة تشغيل عالمك.'],
  ['home','home',en?'Today':'اليوم',en?'Your central chamber.':'الغرفة المركزية.']
 ];
 const T=en?{
  label:'MIHRAB / SANCTUARY',sub:'A private operating space for the life you are building.',enter:'Enter the chamber',focus:'Focus',remaining:'remaining',mode:'mode',trajectory:'today’s trajectory',now:'NOW',next:'NEXT',later:'LATER',field:'THE DAY AHEAD',open:'Open',active:'active days',streak:'streak',quiet:'Build quietly. Move deliberately.',today:'Today',completed:'completed',week:'this week',rooms:'ROOMS / THE WORLD',principles:'the pillars stay fixed',flow:'Faith → Craft → Impact → Independence',
 }:{
  label:'مِحْرَاب / الْحُجْرَة',sub:'مساحة خاصة تشغّل فيها الحياة التي تبنيها بهدوء.',enter:'ادخل الحُجرة',focus:'ركّز',remaining:'متبقي',mode:'الوضع',trajectory:'مسار اليوم',now:'الآن',next:'التالي',later:'لاحقًا',field:'ما ينتظرك اليوم',open:'افتح',active:'أيام نشطة',streak:'التتابع',quiet:'ابنِ بهدوء. تحرّك بقصد.',today:'اليوم',completed:'أُنجز',week:'هذا الأسبوع',rooms:'الغرف / العالم',principles:'الأركان ثابتة',flow:'إيمان ← صناعة ← أثر ← استقلال',
 };
 return `<div class="sanctuary-home">
   <section class="sanctuary-stage" aria-label="Mihrab sanctuary">
     <div class="stage-vignette"></div><div class="stage-aurora stage-aurora-a"></div><div class="stage-aurora stage-aurora-b"></div>
     <div class="architectural-mesh" aria-hidden="true"></div><div class="starfield" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
     <div class="stage-copy">
       <div class="sanctuary-kicker"><span class="signal-dot"></span><span>${T.label}</span><span class="stage-date">${esc(en?translateText(day):day)} · ${esc(modeLabel)}</span></div>
       <div class="stage-heading">
         <span class="stage-overline">${en?'YOUR PRIVATE SPACE':'مساحتك الخاصة'}</span>
         <h1>${en?'Come back<br><em>to yourself.</em>':'ارجع<br><em>لنفسك.</em>'}</h1>
         <p>${esc(T.sub)}</p>
       </div>
       <div class="stage-actions"><button class="btn primary sanctuary-enter" onclick="document.getElementById('todayField').scrollIntoView({behavior:'smooth'})">${T.enter} <span>↘</span></button><button class="btn ghost" onclick="startFocus()">${T.focus} <span>◉</span></button></div>
       <div class="stage-footline"><span>${T.flow}</span><b>${T.quiet}</b></div>
     </div>
     <div class="sanctuary-portal" aria-hidden="true">
       <div class="portal-aura"></div><div class="portal-ring ring-a"></div><div class="portal-ring ring-b"></div><div class="portal-ring ring-c"></div>
       <div class="portal-arch">
         <div class="arch-sheen"></div><div class="arch-opening"><div class="arch-depth"></div></div>
         <div class="portal-brand"><div class="mihrab-mark big"><svg viewBox="0 0 52 52"><path class="mark-outer" d="M10 40V23c0-7.2 6-13 13.4-13h5.2C35 6 41 11.8 41 19v21"/><path class="mark-inner" d="M17 40V21.2C17 16.1 21 12 26 12s9 4.1 9 9.2V40"/><path class="mark-floor" d="M9 40h33"/><circle class="mark-dot" cx="26" cy="7.5" r="1.65"/></svg></div><strong>مِحْرَاب</strong><small>M I H R A B</small></div>
       </div>
       <div class="portal-stat"><span>${T.trajectory}</span><strong>${pr.p}%</strong><small>${done} / ${total} ${en?'complete':'منجز'}</small></div>
     </div>
     <div class="floating-note note-now"><span>01</span><b>${T.now}</b><strong>${label(now)}</strong></div>
     <div class="floating-note note-next"><span>02</span><b>${T.next}</b><strong>${label(next)}</strong></div>
     <div class="floating-note note-later"><span>03</span><b>${T.later}</b><strong>${label(later)}</strong></div>
   </section>

   <section class="chamber-deck" id="todayField">
     <div class="deck-intro"><span class="micro-label">01 / ${T.field}</span><h2>${en?'The day unfolds from here.':'اليوم يبدأ من هنا.'}</h2><p>${esc(T.quiet)}</p></div>
     <div class="now-console">
       <div class="console-orb"><div class="console-progress" style="--progress:${pr.p*3.6}deg"><span>${pr.p}%</span></div></div>
       <div class="console-copy"><span class="micro-label">${T.now}</span><h3>${label(now)}</h3><p>${now?`${now.duration} ${en?'minutes':'دقيقة'} · ${now.priority==='core'?(en?'essential':'أساسي'):now.priority==='important'?(en?'important':'مهم'):(en?'optional':'اختياري')}`:(en?'Nothing needs your attention.':'لا شيء يطلب انتباهك الآن.')}</p><div class="console-actions">${now?`<button class="btn primary" onclick="startFocus('${esc(now.id)}')">${T.focus} ↗</button>`:''}<button class="btn ghost" onclick="document.getElementById('dailyTasks').scrollIntoView({behavior:'smooth'})">${en?'View the field':'شوف اليوم'} ↓</button></div></div>
       <div class="console-meta"><div><span>${T.remaining}</span><b>${remaining}</b></div><div><span>${T.active}</span><b>${longStats.activeDays}</b></div><div><span>${T.streak}</span><b>${currentStreak()}</b></div></div>
     </div>
     <div class="orbit-triad"><article><small>${T.next}</small><b>${label(next)}</b><button onclick="${next?`startFocus('${esc(next.id)}')`:`document.getElementById('dailyTasks').scrollIntoView({behavior:'smooth'})`}">↗</button></article><article><small>${T.later}</small><b>${label(later)}</b><button onclick="${later?`startFocus('${esc(later.id)}')`:`navigate('system')`}">↗</button></article><article class="memory-line"><small>${T.completed}</small><b>${(state.history?.events||[]).filter(e=>e.type==='task.complete').length}</b><span>${T.week}</span></article></div>
   </section>

   <section class="world-chamber">
     <div class="world-intro"><span class="micro-label">02 / ${T.rooms}</span><h2>${en?'Move through your world.':'تحرّك داخل عالمك.'}</h2><p>${en?'Each room has its own purpose. The material, light and rhythm stay the same.':'كل غرفة لها غرضها. لكن الضوء والخامة والإيقاع واحد.'}</p></div>
     <div class="room-constellation">${rooms.map(([id,ic,title,desc],i)=>`<button class="room-node room-${i+1} ${id===state.view?'current':''}" onclick="navigate('${id}')"><span class="room-orbit"></span><i>${icon(ic)}</i><b>${esc(title)}</b><small>${esc(desc)}</small><em>${String(i+1).padStart(2,'0')}</em></button>`).join('')}</div>
   </section>

   <section class="execution-chamber" id="dailyTasks">
     <div class="execution-head"><div><span class="micro-label">03 / ${T.field}</span><h2>${en?'What is actually waiting for you.':'ما الذي ينتظرك فعلًا.'}</h2></div><div class="execution-status"><span>${done}/${total}</span><small>${T.completed}</small></div></div>
     <div class="execution-grid"><section class="card task-chamber deep-card"><div class="chamber-header"><div><span class="micro-label">TODAY</span><h3>${en?'Daily duties':'فروض اليوم وبناء النفس'}</h3></div><span class="chamber-count">${remaining} ${T.remaining}</span></div>${taskHTML(items)}</section>
     <aside class="card sanctuary-side-panel"><div class="panel-glow"></div><span class="micro-label">04 / ${T.principles}</span><h3>${en?'Nothing sacred gets crowded out.':'الحاجات الأهم ما تتزاحليس.'}</h3><div class="principle-stack"><div><b>01</b><span>${en?'Reviews before novelty.':'المراجعة قبل الجديد.'}</span></div><div><b>02</b><span>${en?'Qur’an & Islamic studies stay protected.':'القرآن والشرعي يفضلوا ثابتين.'}</span></div><div><b>03</b><span>${en?'Supporting systems shrink first.':'الأنظمة المساندة تتقلص أولًا.'}</span></div></div><div class="panel-quote">${esc(T.flow)}</div></aside></div>
   </section>
 </div>`;
}
function completedTaskDates(){
 const latest=new Map();
 for(const e of state.history?.events||[]){if(!['task.complete','task.uncomplete','focus.complete'].includes(e.type)||!e.taskId)continue; const day=e.day||e.at.slice(0,10); latest.set(e.taskId+'|'+day,e.type!=='task.uncomplete');}
 const dates=new Set(); for(const [key,on] of latest) if(on) dates.add(key.slice(key.lastIndexOf('|')+1)); return dates;
}
function currentStreak(){
 const dates=completedTaskDates(); if(!dates.size)return 0; let d=effectiveDate(), key=localDateKey(d), n=0; while(dates.has(key)){n++;d=new Date(d);d.setDate(d.getDate()-1);key=localDateKey(d)} return n;
}
function consistencyMetrics(period='week'){
 const now=effectiveDate(), plans=state.history?.plans||{}, events=state.history?.events||[];
 let startKey='';
 if(period==='all'){
  const keys=[...Object.keys(plans),...events.map(e=>e.day||e.at?.slice(0,10)).filter(Boolean)].sort();
  startKey=keys[0]||localDateKey(now);
 }else{
  const days=period==='week'?7:period==='month'?30:period==='quarter'?90:365;
  const start=new Date(now); start.setDate(now.getDate()-(days-1)); startKey=localDateKey(start);
 }
 const endKey=localDateKey(now);
 const latest=new Map(), sessionsByDay=new Map();
 for(const e of events){const day=e.day||e.at?.slice(0,10);if(!day||day<startKey||day>endKey)continue;if(e.type==='focus.complete'){sessionsByDay.set(day,(sessionsByDay.get(day)||0)+1);continue}if(!e.taskId||!['task.complete','task.uncomplete'].includes(e.type))continue;latest.set(day+'|'+e.taskId,e.type==='task.complete')}
 const completedByDay=new Map(), completedPlannedByDay=new Map();
 for(const [key,on] of latest){if(!on)continue;const split=key.indexOf('|'),day=key.slice(0,split),taskId=key.slice(split+1);completedByDay.set(day,(completedByDay.get(day)||0)+1);const plan=plans[day];if(Array.isArray(plan)&&plan.includes(taskId))completedPlannedByDay.set(day,(completedPlannedByDay.get(day)||0)+1)}
 const planDays=Object.keys(plans).filter(d=>d>=startKey&&d<=endKey).sort();
 const planned=planDays.reduce((sum,d)=>sum+(Array.isArray(plans[d])?plans[d].length:0),0);
 const completedPlanned=[...completedPlannedByDay.values()].reduce((a,b)=>a+b,0);
 const completed=[...completedByDay.values()].reduce((a,b)=>a+b,0);
 const sessions=[...sessionsByDay.values()].reduce((a,b)=>a+b,0);
 const activeDays=[...completedByDay.keys()].length;
 const streakDates=[...completedByDay.keys()].sort();
 let bestStreak=0,current=0,prev=null;for(const d of streakDates){const dt=new Date(d+'T12:00:00');if(prev){const pd=new Date(prev+'T12:00:00');pd.setDate(pd.getDate()+1);if(localDateKey(pd)===d)current++;else current=1}else current=1;bestStreak=Math.max(bestStreak,current);prev=d}
 let strongestMonth=null,weakestMonth=null;
 if(period==='year'||period==='all'){
  const monthMap={};for(const d of planDays){const m=d.slice(0,7);monthMap[m] ||= {planned:0,completed:0};monthMap[m].planned += Array.isArray(plans[d])?plans[d].length:0;monthMap[m].completed += completedPlannedByDay.get(d)||0}
  const scored=Object.entries(monthMap).filter(([,x])=>x.planned>0).map(([m,x])=>({month:m,rate:Math.round(x.completed/x.planned*100),planned:x.planned,completed:x.completed}));
  if(scored.length){strongestMonth=scored.slice().sort((a,b)=>b.rate-a.rate||b.completed-a.completed)[0];weakestMonth=scored.slice().sort((a,b)=>a.rate-b.rate||a.completed-b.completed)[0];}
 }
 return {activeDays,trackedDays:planDays.length,planned,completedPlanned,completed,sessions,consistency:planned?Math.round(completedPlanned/planned*100):null,bestStreak,currentStreak:currentStreak(),strongestMonth,weakestMonth,startKey,endKey,totalDays:period==='week'?7:period==='month'?30:period==='quarter'?90:period==='year'?365:null};
}

function recordEvent(type,payload={}){
 state.history ||= {events:[],series:{},milestones:[]}; state.history.events ||= [];
 state.history.events.push({id:'evt_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),type,at:new Date().toISOString(),day:keyDate(),...payload});
 if(state.history.events.length>5000)state.history.events=state.history.events.slice(-5000); save();
}
function seriesImportance(x){return x.core?'core':x.important?'important':'optional'}
function seriesProgress(x){const total=Math.max(0,Number(x.sessions)||0),done=Math.min(total,Math.max(0,Number(x.completedSessions)||0));return {total,done,p:total?Math.round(done/total*100):0}}
function seriesStatusLabel(x,en=false){const ar=x.status==='done'?'مكتمل':x.status==='paused'?'متوقف':'نشط';return en?(I18N[ar]||ar):ar}
function ensureCompletedSeriesSnapshots(){
 state.history ||= {events:[],series:{},milestones:[],plans:{}}; state.history.series ||= {}; state.history.milestones ||= [];
 for(const x of state.library||[]){
  if(x.status!=='done'||state.history.series[x.id]) continue;
  state.history.series[x.id]={seriesId:x.id,title:x.title||'',titleEn:x.titleEn||'',category:x.category||'islamic',importance:seriesImportance(x),totalSessions:Number(x.sessions)||0,completedSessions:Number(x.completedSessions)||0,startDate:x.createdAt||null,completionDate:x.completedAt||null};
 }
}

function renderMarketing(){const en=state.lang==='en';let overallIds=[],out=`<div class="legacy-room page-room"><div class="room-shell"><div class="section-title"><div><h2>${icon('marketing')} معسكر التسويق الطبي الرقمي</h2><p>${en? '10 weeks · 12 hours/week · each week adds a piece to one case study.':'10 أسابيع · 12 ساعة أسبوعيًا · كل أسبوع يضيف جزءًا إلى دراسة حالة واحدة.'}</p></div><span class="badge core">${en?'Professional priority':'أولوية مهنية'}</span></div><section class="awareness" style="margin-bottom:14px"><div class="kicker">${en?'THE UNIFIED CASE STUDY':'دراسة الحالة الموحدة'}</div><h2 style="margin:8px 0">صيدلية الفيروز الإكلينيكية</h2><p class="muted" style="line-height:1.9;margin:0">ليسروع موحّد: صيدلية إكلينيكية افتراضية في حي الفيروز، الأقصر، تقدم استشارات دوائية أونلاين ومتابعة للمرضى.</p></section><div class="grid grid-2"><section class="section-box"><h3>${icon('brain')} ${en?'Today’s method':'طريقة اليوم'}</h3><p>${en?'One hour visual learning → 15 min AI ideation → 15 min synthesis → 30 min Anki.':'ساعة تعلم بصري وفيديو → 15 دقيقة عصف ذهني بالذكاء الاصطناعي → 15 دقيقة توليف شخصي → 30 دقيقة Anki.'}</p><div class="note">${en?'Fixed application question: How does today’s topic apply specifically to Al-Fayrouz Clinical Pharmacy?':'سؤال التطبيق الثابت: «كيف يُطبَّق موضوع اليوم على صيدلية الفيروز تحديدًا؟»'}</div></section><section class="section-box"><h3>${icon('target')} ${en?'Buffer rule':'قاعدة الهاليس'}</h3><p>${en?'Missed a day? Do not compensate the next day. Shift the schedule; under pressure, new production shrinks before essentials.':'فاتك يوم؟ لا تعوّضه في اليوم التالي. زحزح الجدول؛ وعند الضغط يتقلص الإنتاج الجديد قبل الأساسيات.'}</p></section></div>`;
 MARKETING.forEach(([phase,weeks])=>{out+=`<div class="section-title"><div><h2>${esc(phase)}</h2></div></div>`;weeks.forEach(([title,days,deep])=>{const ids=days.concat(deep).map(x=>idFor(title,x));const pr=pct(ids,state.plan);overallIds.push(...ids);out+=`<details class="week-card"><summary><span><b>${esc(title)}</b></span><span class="badge">${pr.p}% · ${pr.n}/${pr.total}</span></summary><div class="week-body"><div class="progress-head"><span>تقدم الأسبوع</span><b>${pr.p}%</b></div><div class="progress"><i style="width:${pr.p}%"></i></div><div class="week-grid" style="margin-top:12px"><div class="week-block"><h4>${icon('book')} ${en?'Learning days':'أيام التعلم'}</h4>${days.map(x=>{const id=idFor(title,x),d=pChecked(id);return `<label class="mtask ${d?'done':''}"><input type="checkbox" ${d?'checked':''} onchange="togglePlan('${id}')"><span>${esc(x).replace('🔍','')}</span></label>`}).join('')}</div><div class="week-block"><h4>${icon('target')} ${en?'Deep application':'التطبيق العميق'}</h4>${deep.map(x=>{const id=idFor(title,x),d=pChecked(id);return `<label class="mtask ${d?'done':''}"><input type="checkbox" ${d?'checked':''} onchange="togglePlan('${id}')"><span>${esc(x).replace('🔍','')}</span></label>`}).join('')}</div></div></div></details>`})});
 const ov=pct(overallIds,state.plan);out+=`<div class="section-title"><div><h2>${icon('brain')} نظام Anki داخل المعسكر</h2><p>المعلومة التي لا تحتاج الاحتفاظ بها طويلًا لا تتحول تلقائيًا إلى بطاقة.</p></div></div><div class="grid grid-3">${[['Must memorize: 4Ps, STP, SWOT, AIDA, TOFU/MOFU/BOFU, Buyer Persona, USP, CTA, SEO, CAC, LTV, CTR, CPC, CPM, ROAS, Conversion Rate, UTM, SMART, KPIs.'],['Understand and apply: AMA definition, marketing history, Marketing 1.0/2.0/3.0/5.0, evolution stories, and company examples.'],['Reference only: statistics, studies, and long examples.']].map(x=>`<div class="section-box"><p style="line-height:1.85">${esc(x[0])}</p></div>`).join('')}</div><div class="grid grid-2" style="margin-top:12px"><div class="section-box"><h3>${icon('check')} بوابة إنشاء البطاقة</h3><p>هل سأحتاجها بعد 3 شهور؟ هل سأستخدمها في شغل حقيقي؟ هل سأضطر للبحث عنها كل مرة؟ نعم على واحدة أو أكثر → بطاقة.</p></div><div class="section-box"><h3>${icon('target')} معيار نجاح الليسروع</h3><p>ليسكلة واضحة → حل مفهوم → نتيجة موثقة في الـPortfolio.</p></div></div><div class="section-box" style="margin-top:12px"><div class="progress-head"><span>التقدم الكلي</span><b>${ov.p}%</b></div><div class="progress"><i style="width:${ov.p}%"></i></div></div><div class="section-box" style="margin-top:12px;border-color:color-mix(in srgb,var(--c) 28%,var(--line))"><h3>${icon('target')} بعد الأسبوع 10</h3><p>Drug Commercialization مؤجل لما بعد المعسكر. الشهادة الموازية (HubSpot / Google) تظل 20–30 دقيقة وقت الفراغ ولا تكرر محتوى المعسكر.</p></div>`;return out+`</div></div>`}
function renderShari(){
 const en=state.lang==='en', day=todayName();
 const series=(state.library||[]).filter(x=>x.category==='islamic');
 const active=series.filter(x=>x.status==='active'), paused=series.filter(x=>x.status==='paused'), done=series.filter(x=>x.status==='done');
 const importanceLabel=x=>{const p=seriesImportance(x);return en?(p==='core'?'Core':p==='important'?'Important':'Optional'):(p==='core'?'أساسي':p==='important'?'مهم':'اختياري')};
 const purpose=x=>x.purpose||(x.group==='awareness'?(en?'Build awareness and intellectual orientation.':'تأسيس الوعي وإعادة توجيه عالم الأفكار.'):(x.core?(en?'A protected Islamic study track.':'مسار شرعي أساسي ومحمي داخل الخطة.'):en?'An Islamic track in your library.':'مسار شرعي موجود في مكتبتك.'));
 const card=x=>{const pr=seriesProgress(x), title=en&&x.titleEn?x.titleEn:x.title, date=x.completedAt?(en?new Date(x.completedAt).toLocaleDateString():new Date(x.completedAt).toLocaleDateString('ar-EG')):(en?'Completion date unknown':'تاريخ الإكمال غير مسجل'); return `<article class="series-card ${x.status==='done'?'is-done':''}"><div class="series-sheen"></div><div class="series-head"><div><span class="micro-label">${importanceLabel(x)}</span><h3>${esc(title)}</h3><p>${esc(purpose(x))}</p></div><span class="badge ${x.core?'core':''}">${seriesStatusLabel(x,en)}</span></div><div class="series-meta"><span>${pr.total?`${pr.done}/${pr.total} ${en?'sessions':'جلسات'}`:(en?'Open progress':'تقدم مفتوح')}</span><span>${x.days?.length?esc((x.days||[]).join(' · ')):(en?'Unscheduled':'غير مجدول')}</span></div><div class="progress"><i style="width:${pr.p}%"></i></div><div class="series-actions"><button class="tiny-action" onclick="openTrackDetails('${x.id}')">${en?'Details ↗':'التفاصيل ↗'}</button>${x.status==='active'&&pr.total>pr.done?`<button class="tiny-action primary-mini" onclick="completeSession('${x.id}')">${en?'Complete session':'إنهاء جلسة'}</button>`:''}${x.status==='active'?`<button class="tiny-action" onclick="archiveContent('${x.id}')">${en?'Pause':'إيقاف'}</button>`:''}${x.status==='paused'?`<button class="tiny-action" onclick="activateContent('${x.id}')">${en?'Reactivate':'استئناف'}</button>`:''}${x.status==='done'?`<span class="series-date">${esc(date)}</span>`:''}</div></article>`};
 const group=(label,arr,empty)=>`<section class="section-box shari-library-block"><div class="section-title"><div><span class="micro-label">${label}</span><h3>${arr.length?`${arr.length} ${en?'tracks':'مسارات'}`:(en?'Quiet':'هادئ')}</h3></div></div><div class="series-grid">${arr.length?arr.map(card).join(''):`<div class="note">${empty}</div>`}</div></section>`;
 const rows=DAYS.map(d=>`<div class="timeline-card ${d===day?'today':''}"><div class="day">${d} ${d===day?'· اليوم':''}</div><ul><li>${esc(SHARI_MAP[d])}</li><li>${d==='الجمعة'?'جلسة أطول + تدبر':'حوالي 70–85 دقيقة'}</li></ul></div>`).join('');
 return `<div class="legacy-room page-room"><div class="room-shell"><div class="section-title"><div><span class="micro-label">01 / ${en?'SANCTUARY ROOM':'غرفة الملاذ'}</span><h2>${icon('shari')} ${en?'Islamic studies':'العلم الشرعي'}</h2><p>${en?'A protected room for learning. Series are data-driven and future tracks appear automatically.':'غرفة محمية للعلم. المسارات هنا بيانات عامة، وأي مسار شرعي جديد يظهر تلقائيًا.'}</p></div><span class="badge core">${en?'Protected':'أساسي'}</span></div><section class="shari-hero"><div><span class="micro-label">${en?'THE LIBRARY':'المكتبة'}</span><h2>${en?'Learn deliberately, not endlessly.':'تعلّم بقصد، لا بتكديس المحتوى.'}</h2><p>${en?'The page shows only the information needed to choose your next session. Details stay one interaction away.':'تعرض الصفحة ما تحتاجه لاختيار الجلسة التالية؛ وتبقى التفاصيل على بُعد ضغطة.'}</p></div><div class="shari-stats"><div><b>${active.length}</b><span>${en?'active':'نشط'}</span></div><div><b>${done.length}</b><span>${en?'completed':'مكتمل'}</span></div><div><b>${series.length}</b><span>${en?'total':'إجمالي'}</span></div></div></section>${group(en?'ACTIVE TRACKS':'المسارات النشطة',active,en?'Nothing active yet.':'لا توجد مسارات نشطة حاليًا.')}${group(en?'PAUSED / ARCHIVED':'المتوقف / المؤرشف',paused,en?'No paused tracks.':'لا توجد مسارات متوقفة.')}${group(en?'COMPLETED / ACHIEVED':'مكتمل / منجز',done,en?'No completed tracks have been recorded yet.':'لا توجد مسارات مكتملة مسجلة بعد.')}
 <div class="section-title"><div><span class="micro-label">02 / ${en?'WEEKLY RHYTHM':'إيقاع أسبوعي'}</span><h2>${en?'Weekly room rhythm':'إيقاع الغرفة الأسبوعي'}</h2><p>${en?'The schedule remains separate from the content library.':'يبقى الجدول الأسبوعي منفصلًا عن مكتبة المسارات.'}</p></div></div><div class="timeline">${rows}</div>
 <div class="section-title"><div><span class="micro-label">03 / ${en?'TODAY':'اليوم'}</span><h2>${en?'Today’s protected work':'تنفيذ اليوم المحمي'}</h2><p>${en?'Mark only what you actually complete.':'علّم فقط ما أنجزته فعلًا.'}</p></div></div><section class="section-box">${taskHTML(shariItems(day))}</section></div></div>`;
}
function renderQuran(){
 const open=!!state.quranFrameOpen;
 return `<div class="legacy-room page-room"><div class="room-shell"><div class="section-title"><div><h2>${icon('quran')} القرآن</h2><p>مراجعة المحفوظ أثناء الدراسة؛ رفيق القرآن يظل أداة مستقلة تدخل لها وقت ما تحتاج.</p></div><span class="badge core">مراجعة فقط</span></div>
 <div class="grid grid-2">
  <section class="section-box">
   <h3>مراجعة اليوم</h3>
   <div class="task-item ${tChecked('quran')?'done':''}" data-task-id="quran"><input type="checkbox" id="quranToday" data-today-id="quran" ${tChecked('quran')?'checked':''}><label class="task-text" for="quranToday"><span class="task-leading-icon">${icon('quran')}</span><span>${state.lang==='en'?'Reviewed memorized Qur’an today — Juz ‘Amma / Tabarak / older memorized portions / pre-university memorization':'راجعت المحفوظ اليوم — عمّ / تبارك / القديم / ما تم حفظه قبل الدراسة'}</span></label><span class="mihrab-badge badge-spirit">${state.lang==='en'?'Core':'ورد'}</span></div>
   <div class="note" style="margin-top:10px">المكان الأفضل: المصلى بين المحاضرات والسكاشن، ثم المواصلات. لو التركيز وقع وبدأ الخلط بين المتشابهات: قف وخذ راحة.</div>
  </section>
  <section class="section-box quran-bridge">
   <div class="bridge-icon">${icon('quran')}</div>
   <div><h3 style="margin-bottom:5px">رفيق القرآن</h3><p class="muted" style="margin:0">نسختك المنشورة على Cloudflare. لو رفيق مثبت كتطبيق على جهازك، افتحه من زر «فتح رفيق»؛ وإلا سيفتح الموقع.</p></div>
   <div class="bridge-actions"><a class="btn primary" href="${RAFIQ_URL}" target="_blank" rel="noopener">فتح رفيق ↗</a><button class="btn ${open?'active':''}" onclick="toggleRafiqFrame()">${open?'إخفاء داخل اللوحة':'عرض داخل اللوحة'}</button></div>
  </section>
 </div>
 ${open?`<div class="section-title"><div><h2>${icon('quran')} رفيق القرآن</h2><p>يُحمّل الإطار فقط عند طلبه حتى تظل اللوحة سريعة وخفيفة.</p></div><span class="badge">Cloudflare</span></div><div class="iframe-wrap"><div class="iframe-head"><b>رفيق القرآن</b><div style="display:flex;gap:7px;align-items:center"><span class="badge">${en?'Live':'مباشر'}</span><button class="icon-btn" onclick="toggleRafiqFrame()" aria-label="إغلاق">×</button></div></div><iframe id="rafiqFrame" title="رفيق القرآن داخل Mihrab" src="${RAFIQ_URL}" loading="lazy" allow="autoplay; fullscreen" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"></iframe></div>`:''}</div></div>`;
}
function renderCourses(){return `<div class="legacy-room page-room"><div class="room-shell"><div class="section-title"><div><h2>${icon('courses')} الكورسات والأنظمة المساندة</h2><p>مساندة لا تسبق الأساسيات.</p></div></div><div class="grid grid-3"><section class="section-box"><h3>${icon('brain')} Anki</h3><p>المراجعة المستحقة أولًا. الجديد بميزانية ثابتة. أماكنه المفضلة: المواصلات، المصلى، والفواصل.</p></section><section class="section-box"><h3>${icon('target')} McKinsey Forward</h3><p>حوالي ساعتين أسبوعيًا. أول ما ينكمش عند ضغط الدراسة.</p><label class="task ${state.weekly.mckinsey?'done':''}"><input type="checkbox" ${state.weekly.mckinsey?'checked':''} onchange="state.weekly.mckinsey=this.checked;save();renderAll()"><span>أنجزت نصيب الأسبوع</span></label></section><section class="section-box"><h3>${icon('book')} The Pharmacist's Guide to Dose Calculations</h3><p>2:41 ساعة إجماليًا · جلسات قصيرة 10–15 دقيقة تقريبًا. أيضًا من أول الأشياء التي يمكن تأجيلها عند الضغط.</p><label class="task ${state.weekly.dose?'done':''}"><input type="checkbox" ${state.weekly.dose?'checked':''} onchange="state.weekly.dose=this.checked;save();renderAll()"><span>أنجزت نصيب الأسبوع</span></label></section></div><div class="grid grid-2" style="margin-top:12px"><section class="section-box"><h3>${icon('spark')} HubSpot / Google</h3><p>20–30 دقيقة وقت الفراغ، بالتوازي مع المعسكر، بدون إعادة شرح ما تدرسه بالفعل.</p><label class="task ${state.weekly.cert?'done':''}"><input type="checkbox" ${state.weekly.cert?'checked':''} onchange="state.weekly.cert=this.checked;save();renderAll()"><span>أنجزت نصيب الشهادة الموازية</span></label></section><section class="section-box"><h3>${icon('book')} EasyPeasy</h3><p>يظل موجودًا كقراءة خفيفة داخل اليوم، ولا يضخم الخطة الرئيسية.</p></section></div><div class="section-box" style="margin-top:12px;border-color:color-mix(in srgb,var(--c) 28%,var(--line))"><h3>${icon('pause')} Drug Commercialization</h3><p>مؤجل إلى ما بعد معسكر التسويق.</p></div></div>`}
function renderSystemBase(){
 const themes = state.lang==='en'
  ? [['aurora','Aurora','Emerald + Gold'],['midnight','Midnight','Indigo + Gold'],['sunrise','Velvet','Amber + Burgundy'],['paper','Champagne','Ivory + Gold'],['mono','Obsidian','Platinum + Gold'],['system','System / Auto','Follows device light/dark preference']]
  : [['aurora','Aurora','زمرد + ذهب'],['midnight','Midnight','نيلي + ذهب'],['sunrise','Velvet','عنبر + برغندي'],['paper','Champagne','عاجي + ذهب'],['mono','Obsidian','بلاتيني + ذهب'],['system','النظام / تلقائي','يتبع وضع الإضاءة في الجهاز']];
 const rating=state.weekly.rating||'';
 const reviewChoices=state.lang==='en'
  ? [['excellent','spark','Excellent','80–90%+ and steady progress'],['good','check','Very good','Going well with some friction'],['unstable','filter','Unstable','Something needs adjustment'],['emergency','target','Emergency week','Essentials had priority']]
  : [['excellent','spark','ممتاز','80–90%+ والتقدم ثابت'],['good','check','جيد جدًا','يسير جيدًا مع بعض التعثر'],['unstable','filter','متذبذب','هناك حاجة محتاجة تعديل'],['emergency','target','أسبوع طوارئ','كانت أولًاوية للضروريات']];
 const dayTypeLabels = state.lang==='en'
   ? {'كلية':'College','بدون كلية':'No college','ديب وورك':'Deep work','راحة':'Rest'}
   : {'كلية':'كلية','بدون كلية':'بدون كلية','ديب وورك':'ديب وورك','راحة':'راحة'};
 const dayLabels = state.lang==='en'
   ? {'السبت':'Saturday','الأحد':'Sunday','الاثنين':'Monday','الثلاثاء':'Tuesday','الأربعاء':'Wednesday','الخميس':'Thursday','الجمعة':'Friday'}
   : Object.fromEntries(DAYS.map(d=>[d,d]));
 return `<div class="legacy-room page-room"><div class="room-shell"><div class="section-title"><div><h2>${icon('system')} ${state.lang==='en'?'System & review':'النظام والمراجعة'}</h2><p>${state.lang==='en'?'Tune how the board runs without changing the plan itself.':'هنا تضبط طريقة تشغيل اللوحة بدل ما تغيّر الخطة نفسها.'}</p></div><span class="badge core">${state.lang==='en'?'Control':'تحكم'}</span></div>
 <section class="section-box"><h3>${icon('spark')} ${state.lang==='en'?'Board appearance':'شكل اللوحة'}</h3><p class="muted" style="margin-top:-3px">${state.lang==='en'?'The theme changes the background, surfaces, borders, shadows, glow, and overall feel — not just one button color.':'الثيم يغيّر الخلفية، البطاقات، الحواف، الظلال، الإضاءة وطابع الواجهة — وليس مجرد لون زر.'}</p><div class="theme-grid">${themes.map(([id,n,desc])=>`<button type="button" class="theme-card ${state.theme===id?'active':''}" onclick="setTheme('${id}')"><div class="swatch swatch-${id}"></div><b>${n}</b><small>${desc}</small></button>`).join('')}</div></section>
 <section class="section-box" style="margin-top:12px"><div class="section-title" style="margin:0 0 7px"><div><h3 style="margin:0">${icon('target')} ${state.lang==='en'?'Interface language':'لغة الواجهة'}</h3><p>${state.lang==='en'?'Switch between Arabic and English any time.':'بدّل بين العربية والإنجليزية متى شئت.'}</p></div><span class="badge">${state.lang==='en'?'EN':'عربي'}</span></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn ${state.lang==='ar'?'primary':''}" onclick="setLang('ar')">العربية</button><button class="btn ${state.lang==='en'?'primary':''}" onclick="setLang('en')">English</button></div></section>
 <div class="grid grid-2" style="margin-top:12px"><section class="section-box"><h3>${icon('calendar')} ${state.lang==='en'?'Day types':'نوع كل يوم'}</h3>${DAYS.map(d=>`<div class="quote-settings"><div><b>${dayLabels[d]}</b><div class="tiny muted">${state.lang==='en'?'Sets the marketing dose for that day':'يحدد جرعة التسويق لذلك اليوم'}</div></div><select aria-label="${state.lang==='en'?'Day type for ':'نوع يوم '}${dayLabels[d]}" onchange="state.weekDayTypes['${d}']=this.value;save();renderAll()">${['كلية','بدون كلية','ديب وورك','راحة'].map(v=>`<option value="${v}" ${(state.weekDayTypes[d]||'كلية')===v?'selected':''}>${dayTypeLabels[v]}</option>`).join('')}</select></div>`).join('')}</section>
 <section class="section-box"><h3>${icon('spark')} ${state.lang==='en'?'Board identity':'هوية اللوحة'}</h3><p class="muted" style="margin-top:-3px">${state.lang==='en'?'Themes, language, and day types live here. The plan itself stays fixed.':'الثيمات واللغة ونوع كل يوم هنا. الخطة نفسها تفضل ثابتة.'}</p><div class="note">${state.lang==='en'?'These controls change presentation and operation only while keeping your plan intact.':'التغيير هنا بصري وتشغيلي فقط: الثيم يغيّر الخلفية والزجاج والحدود والظلال والإضاءة مع الحفاظ على نفس المحتوى.'}</div></section></div>
 <section class="section-box" style="margin-top:12px"><div class="section-title" style="margin:0 0 6px"><div><h2 style="font-size:20px">${icon('filter')} ${state.lang==='en'?'Weekly review':'التقييم الأسبوعي'}</h2><p>${state.lang==='en'?'Choose your real weekly rating — it saves and counts as the weekly review.':'اختر تقييمك الحقيقي للأسبوع؛ يُحفظ الاختيار ويُسجَّل في المراجعة الأسبوعية.'}</p></div><span class="badge ${rating?'core':''}">${rating?(state.lang==='en'?'Saved':'محفوظ'):(state.lang==='en'?'Not rated':'لم يُقيَّم')}</span></div><div class="review-grid">${reviewChoices.map(([id,e,t,d])=>`<label class="review-choice ${rating===id?'selected':''}"><input type="radio" name="weekly-rating" value="${id}" ${rating===id?'checked':''} onchange="setWeeklyRating('${id}')"><span class="review-icon">${icon(e)}</span><b>${t}</b><small>${d}</small></label>`).join('')}</div><details class="disclosure"><summary>${state.lang==='en'?'Details':'التفاصيل'}</summary><div class="note" style="margin-top:10px">${state.lang==='en'?'Weekly review: 10–15 minutes. Ask: what was easy to sustain, what kept slipping, and what will you reduce or lock in next week?':'المراجعة الأسبوعية: 10–15 دقيقة. اسأل: ما الذي التزمت به بسهولة؟ وما الذي استمر يتأجل؟ وما الذي ستخففه أو تثبته في الأسبوع القادم؟'}</div></details></section>
 <section class="section-box" style="margin-top:12px"><div class="section-title" style="margin:0 0 8px"><div><h3 style="margin:0">${icon('system')} ${state.lang==='en'?'Use it as an app':'استخدمها كتطبيق'}</h3><p>${state.lang==='en'?'Install Mihrab on your phone home screen as a standalone app.':'ثبّت Mihrab على شاشة الهاتف لفتحها كتطبيق مستقل بدل المتصفح.'}</p></div><span class="badge">PWA</span></div><button class="btn primary" onclick="installPWA()" id="installBtn">${state.lang==='en'?'Install on device ↗':'تثبيت على الجهاز ↗'}</button><div class="tiny muted" style="margin-top:8px">${state.lang==='en'?'Home-screen install: yes. A live home-screen widget requires a native app; this board is designed as a lightweight, installable PWA.':'الشاشة الرئيسية: نعم. Widget حيّ فوق الشاشة الرئيسية يحتاج تطبيقًا أصليًا؛ اللوحة هنا مصممة لتكون PWA خفيفة وقابلة للتثبيت.'}</div></section><section class="section-box power-card" style="margin-top:12px"><div class="section-title" style="margin:0 0 6px"><div><h3>${icon('spark')} ${state.lang==='en'?'Performance':'الأداء'}</h3><p>${state.lang==='en'?'Control live effects without changing your plan.':'تحكم في المؤثرات الحية من غير ما تغيّر الخطة.'}</p></div><span class="badge">${state.settings.lowPower?(state.lang==='en'?'Low power':'توفير'): (state.lang==='en'?'Live':'حي')}</span></div><label class="switch"><input type="checkbox" ${state.settings.lowPower?'checked':''} onchange="state.settings.lowPower=this.checked;save();document.body.dataset.lowPower=this.checked?'true':'false';renderAll()"> ${state.lang==='en'?'Low Power Mode — reduce motion, blur, and atmosphere':'وضع توفير الطاقة — يقلل الحركة والتمويه والإضاءة'}</label></section>
 <div class="grid grid-2" style="margin-top:12px"><section class="section-box"><h3>${icon('progress')} ${state.lang==='en'?'Marketing this week':'التسويق هذا الأسبوع'}</h3><div class="progress-head"><span>${state.lang==='en'?'Hours':'الساعات'}</span><b>${state.weekly.marketingHours||0} / 12</b></div><div class="progress"><i style="width:${Math.min(100,(state.weekly.marketingHours||0)/12*100)}%"></i></div><div class="field" style="margin-top:10px"><label>${state.lang==='en'?'Enter actual hours':'أدخل الساعات الفعلية'}</label><input type="number" min="0" step="0.5" value="${state.weekly.marketingHours||0}" onchange="state.weekly.marketingHours=parseFloat(this.value)||0;save();renderAll()"></div></section><section class="section-box"><h3>${icon('filter')} ${state.lang==='en'?'Energy modes':'أوضاع الطاقة'}</h3><p><b>${state.lang==='en'?'Normal:':'طبيعي:'}</b> ${state.lang==='en'?'Full plan.':'الخطة كاملة.'}</p><p><b>${state.lang==='en'?'Low energy:':'منخفض الطاقة:'}</b> ${state.lang==='en'?'Prayer/adhkar + some Qur’an + small marketing output + old Anki only. Side content pauses first.':'الصلاة/الأذكار + قدر من القرآن + إنتاج تسويق صغير + Anki قديم فقط. المحتوى الجانبي يتوقف أولًا.'}</p><p><b>${state.lang==='en'?'Exceptional:':'استثنائي:'}</b> ${state.lang==='en'?'Prayer + adhkar + a little Qur’an + rest.':'الصلاة + الأذكار + قرآن يسير + راحة.'}</p></section></div>
 <div class="section-box" style="margin-top:12px"><h3>${icon('system')} ${state.lang==='en'?'Operating rules':'قواعد التشغيل'}</h3><div class="grid grid-2"><div>${(state.lang==='en'?['Sleep 6–8 hours.','During exams: regular Anki continues; new production reduces first.','If two days are lost in a row: no forced catch-up; review why.']:['النوم 6–8 ساعات.','امتحانات: Anki regular مستمر، والإنتاج الجديد يقل أولًا.','لو يومان ضاعا وراء بعض: لا تعويض قهري؛ راجع السبب.']).map(x=>`<p>${x}</p>`).join('')}</div><div>${(state.lang==='en'?['Islamic studies stay fixed.','Qur’an stays fixed but timing is flexible.','Marketing is the professional priority; McKinsey and Dose shrink first.']:['يبقى العلم الشرعي ثابتًا.','يبقى القرآن ثابتًا مع مرونة التوقيت.','التسويق هو أولًاوية المهنية؛ ويتقلص McKinsey وDose أولًا.']).map(x=>`<p>${x}</p>`).join('')}</div></div></div></div>`;
}



/* ================================================================
   MIHRAB CLEAN CORE — one state, one router, one render pipeline
   ================================================================ */

function showEntryThreshold(){
 const el=document.getElementById('entryThreshold');
 if(!el)return;
 el.setAttribute('aria-hidden','false');
 document.body.classList.add('threshold-active');
 setTimeout(()=>{
   if(!el.isConnected)return;
   el.classList.add('is-live');
   try{el.querySelector('#entryEnter')?.focus({preventScroll:true});}catch{}
 },40);
}
function enterMihrab(skip=false){
 const el=document.getElementById('entryThreshold');
 if(!el)return;
 el.classList.add(skip?'is-skip':'is-leaving');
 document.body.classList.add('entering-mihrab');
 const wait=skip?380:980;
 setTimeout(()=>{el.remove();document.body.classList.remove('threshold-active','entering-mihrab');document.querySelector('.app')?.classList.add('sanctuary-awake');window.scrollTo({top:0,left:0,behavior:'auto'});},wait);
}
(function(){
  'use strict';
  const VIEWS=['home','execution','focus','progress','system','marketing','shari','quran','courses'];
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
    state.history={events:[],series:{},milestones:[],plans:{},...(state.history||{})}; state.history.events ||= []; state.history.series ||= {}; state.history.milestones ||= []; state.history.plans ||= {};
    state.dailyMomentum={date:'',index:0,...(state.dailyMomentum||{})};
    state.projects=Array.isArray(state.projects)?state.projects:[];
    state.areas=Array.isArray(state.areas)?state.areas:AREA_DEFS.map(([id,title,titleEn,icon])=>({id,title,titleEn,icon}));
    state.worship={prayerNotes:{},sunnah:{},fasts:{},dhikr:{date:'',count:0},...(state.worship||{})};
    state.worship.prayerNotes ||= {}; state.worship.sunnah ||= {}; state.worship.fasts ||= {}; state.worship.dhikr ||= {date:'',count:0};
    try{
      const storedMomentum=JSON.parse(localStorage.getItem(MOMENTUM_KEY)||'null');
      if(storedMomentum && typeof storedMomentum.date==='string' && Number.isInteger(storedMomentum.index)) state.dailyMomentum={date:storedMomentum.date,index:storedMomentum.index};
    }catch{}
    state.schemaVersion=5;
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
    ensureState(); ensureCompletedSeriesSnapshots(); resetDay();
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

  function modeAllows(id){
    const m=activeMode(), p=priorityOf(id);
    if(m==='rest') return false;
    if(m==='survival') return ['pr_f','pr_d','pr_a','pr_m','pr_i','azkar','quran','rafiq','aw','zad'].includes(id);
    if(m==='exam') return p==='core'||id==='marketing';
    if(m==='busy') return p!=='optional';
    return true;
  }
    function taskObjects(){
    const lowEnergy=!!state.settings?.lowEnergy;
    const items=dayTasks(todayName()).filter(([id])=>modeAllows(id)).filter(([id])=>!lowEnergy || (priorityOf(id)!=='optional' && (durationFor[id]||15)<=30)).map(([id,text])=>({id,label:text,duration:durationFor[id]||15,priority:priorityOf(id),done:tChecked(id)}));
    // systemSeed library entries mirror categories already in the fixed daily list (zad/awareness/etc.) —
    // only inject the user's own added tracks here so Focus/smartTime never suggest the same duty twice.
    state.library.filter(x=>x.status==='active'&&!x.systemSeed&&x.days?.includes(todayName())).forEach(x=>items.push({id:x.id,label:state.lang==='en'&&x.titleEn?x.titleEn:x.title,duration:x.duration||15,priority:x.core?'core':x.important?'important':'optional',done:!!state.today[x.id],custom:true}));
    return items;
  }
  function smartTime(min){
    const en=state.lang==='en';
    const candidates=taskObjects().filter(x=>!x.done&&x.duration<=min).sort((a,b)=>(a.priority==='core'?0:a.priority==='important'?1:2)-(b.priority==='core'?0:b.priority==='important'?1:2)||a.duration-b.duration).slice(0,6);
    if(!candidates.length){infoModal(en?`Nothing useful fits ${min} minutes right now.`:`لا يوجد حاجة مفيدة مناسبة لـ ${min} دقيقة دلوقتي.`);return;}
    const list=candidates.map(x=>`<button class="command-item" onclick="closeMihrabModal();startFocus('${esc(x.id)}')"><span>${esc(x.label)}</span><small>${x.duration}${en?'m':'د'}</small></button>`).join('');
    openModal(`<div class="mihrab-modal-head"><b>${en?`Good fits for ${min} minutes`:`مناسب لـ ${min} دقيقة`}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="command-list">${list}</div>`);
  }
  function nowNextLater(){return taskObjects().filter(x=>!x.done).sort((a,b)=>a.duration-b.duration).slice(0,3)}
  function coreDone(){const core=taskObjects().filter(x=>x.priority==='core');return core.length>0&&core.every(x=>x.done)}

  function areaForTask(id){
    if(['pr_f','pr_d','pr_a','pr_m','pr_i','azkar','bro'].includes(id)) return 'personal';
    if(['rafiq','quran'].includes(id)) return 'quran';
    if(['aw','zad','taj'].includes(id)) return 'islamic';
    if(['marketing','linkedin','azb'].includes(id)) return 'career';
    if(['anki'].includes(id)) return 'study';
    if(['easy','mouth','skin','hair'].includes(id)) return 'personal';
    return 'study';
  }
  function projectForTask(id){if(['marketing','linkedin','azb'].includes(id))return 'p_marketing';return null;}
  function worshipSummary(){
    const today=keyDate(), w=state.worship||{};
    const prayers=PRAYER_IDS.map(([id,ar,en])=>({id,ar,en,done:!!state.today[id]}));
    const prayerDone=prayers.filter(x=>x.done).length;
    const sunnahDone=['s_fajr','s_dhuhr','s_maghrib','s_isha','s_witr','s_duha'].filter(k=>!!w.sunnah[k]).length;
    const fasted=!!w.fasts[today];
    return {prayers,prayerDone,sunnahDone,fasted,dhikr:Number(w.dhikr?.date===today?w.dhikr.count:0)||0};
  }
  function renderWorshipRail(){
    const en=state.lang==='en', ws=worshipSummary();
    const sunnah=[['s_fajr',en?'Fajr sunnah':'سنة الفجر'],['s_dhuhr',en?'Dhuhr sunnah':'رواتب الظهر'],['s_maghrib',en?'Maghrib sunnah':'سنة المغرب'],['s_isha',en?'Isha sunnah':'سنة العشاء'],['s_witr',en?'Witr':'الوتر'],['s_duha',en?'Duha':'الضحى']];
    return `<section class="worship-rail glass-surface"><div class="worship-head"><div><span class="micro-label">05 / ${en?'WORSHIP CORE':'العبادة'}</span><h3>${en?'Protected, not gamified.':'عبادة محفوظة من الزحام.'}</h3><p>${en?'A quiet layer for the essentials — no XP, no pressure.':'طبقة هادئة للأساسيات، بلا نقاط ولا ضغط.'}</p></div><span class="worship-score">${ws.prayerDone}/5</span></div><div class="prayer-dock">${ws.prayers.map(x=>`<label class="prayer-chip ${x.done?'done':''}"><input type="checkbox" data-today-id="${x.id}" ${x.done?'checked':''}><span>${esc(en?x.en:x.ar)}</span></label>`).join('')}</div><div class="sunnah-dock">${sunnah.map(([id,label])=>`<button class="ritual-chip ${state.worship.sunnah[id]?'done':''}" onclick="toggleSunnah('${id}')"><span>${state.worship.sunnah[id]?'✓':'○'}</span>${esc(label)}</button>`).join('')}</div><div class="worship-actions"><button class="worship-counter" onclick="addDhikr(33)"><b>${ws.dhikr}</b><span>${en?'dhikr today':'استغفار اليوم'}</span><small>+33</small></button><button class="ritual-chip ${ws.fasted?'done':''}" onclick="toggleFastToday()"><span>${ws.fasted?'✓':'○'}</span>${en?'Fasted today':'صيام اليوم'}</button></div></section>`;
  }
  function renderExecution(){
    const en=state.lang==='en', items=taskObjects().sort((a,b)=>priorityRank[a.priority]-priorityRank[b.priority]||a.duration-b.duration), groups={};
    items.forEach(x=>(groups[areaForTask(x.id)] ||= []).push(x));
    const areaCards=AREA_DEFS.map(([id,ar,enTitle,iconName])=>{const xs=groups[id]||[];const count=xs.filter(x=>x.done).length;return `<button class="area-card" onclick="document.getElementById('area-${id}')?.scrollIntoView({behavior:'smooth',block:'start'})"><span class="area-glyph">${ICON_PATHS[iconName]?icon(iconName):icon('spark')}</span><div><b>${en?enTitle:ar}</b><small>${count}/${xs.length} ${en?'done':'منجز'}</small></div><i>↘</i></button>`}).join('');
    const projects=Array.isArray(state.projects)&&state.projects.length?state.projects:[{id:'p_marketing',name:en?'Digital Medical Marketing Bootcamp':'معسكر التسويق الطبي الرقمي',area:'career',status:'active',progress:0}];
    projects.forEach(project=>{const areaTasks=items.filter(x=>areaForTask(x.id)===project.area);project.progress=areaTasks.length?Math.round(areaTasks.filter(x=>x.done).length/areaTasks.length*100):(project.progress||0)});
    const taskBlocks=AREA_DEFS.map(([id,ar,enTitle])=>{const xs=groups[id]||[];if(!xs.length)return '';return `<section class="execution-area" id="area-${id}"><div class="area-heading"><div><span class="micro-label">${en?enTitle.toUpperCase():ar}</span><h3>${en?`Work that belongs here`:`عملك داخل ${ar}`}</h3></div><span>${xs.filter(x=>x.done).length}/${xs.length}</span></div><div class="task-stack">${xs.map(x=>{const label=esc(x.label);return `<article class="execution-task ${x.done?'done':''}" data-task-id="${esc(x.id)}"><div class="task-main"><input type="checkbox" data-today-id="${esc(x.id)}" ${x.done?'checked':''}><div><b>${label}</b><small>${x.duration} ${en?'min':'دقيقة'} · ${x.priority==='core'?(en?'essential':'أساسي'):x.priority==='important'?(en?'important':'مهم'):(en?'optional':'اختياري')}</small></div></div><div class="task-actions"><button onclick="startFocus('${esc(x.id)}')">${en?'Focus':'ركّز'}</button><button onclick="toggleTaskDetails('${esc(x.id)}')">${en?'Details':'التفاصيل'}</button></div></article>`}).join('')}</div></section>`}).join('');
    return `<div class="execution-room page-room"><div class="room-hero"><div><span class="micro-label">MIHRAB / ${en?'EXECUTION':'التنفيذ'}</span><h1>${en?'Turn intention into motion.':'حوّل النية إلى حركة.'}</h1><p>${en?'One place to know what to do, why it matters, and what comes next.':'مكان واحد تعرف منه ماذا ستفعل، ولماذا، وما الخطوة التالية.'}</p></div><button class="btn primary" onclick="openProjectCreator()">＋ ${en?'New project':'ليسروع جديد'}</button></div><div class="execution-console"><div><span class="micro-label">NOW</span><h2>${items[0]?esc(items[0].label):(en?'The field is clear.':'المجال هادئ.')}</h2><p>${items[0]?`${items[0].duration} ${en?'min':'دقيقة'} · ${en?'ready to focus':'جاهزة للتركيز'}`:''}</p></div><div class="console-buttons">${items[0]?`<button class="btn primary" onclick="startFocus('${esc(items[0].id)}')">${en?'Enter Focus':'ادخل التركيز'} ↗</button>`:''}<button class="btn" onclick="smartTime(15)">${en?'15 min':'15 دقيقة'}</button><button class="btn" onclick="toggleLowEnergy()">${en?'No energy':'طاقة منخفضة'}</button></div></div><section class="area-field"><div class="section-title"><div><span class="micro-label">01 / ${en?'AREAS':'المجالات'}</span><h2>${en?'Your life, organized.':'مجالات حياتك، مرتبة.'}</h2></div></div><div class="area-grid">${areaCards}</div></section><section class="project-field"><div class="section-title"><div><span class="micro-label">02 / ${en?'PROJECTS':'الليساريع'}</span><h2>${en?'Projects turn areas into outcomes.':'الليساريع تحوّل المجالات إلى نتائج.'}</h2></div></div><div class="project-list">${projects.map(project=>`<article class="project-card"><div><span class="project-icon">${icon('target')}</span><div><b>${esc(project.name)}</b><small>${esc((AREA_DEFS.find(a=>a[0]===project.area)?.[en?2:1])||'')}</small></div></div><div class="project-progress"><div><span>${project.progress||0}%</span><small>${en?'progress':'تقدم'}</small></div><div class="progress-track"><i style="width:${project.progress||0}%"></i></div></div><button class="btn" onclick="navigate('${project.id==='p_marketing'?'marketing':'execution'}')">${en?'Open':'افتح'} ↗</button></article>`).join('')}</div></section>${renderWorshipRail()}<section class="task-field"><div class="section-title"><div><span class="micro-label">03 / ${en?'TASKS':'المهام'}</span><h2>${en?'What is actually waiting.':'ما الذي ينتظرك فعلًا.'}</h2></div><span class="badge">${items.length} ${en?'today':'اليوم'}</span></div>${taskBlocks}</section></div>`;
  }
  function renderFocusRoom(){
    const en=state.lang==='en', list=taskObjects().filter(x=>!x.done).slice(0,8);return `<div class="focus-room page-room"><div class="focus-intro"><span class="micro-label">MIHRAB / ${en?'FOCUS':'التركيز'}</span><h1>${en?'Enter the quiet.':'ادخل إلى الهدوء.'}</h1><p>${en?'Choose one meaningful task. The room fades; the work remains.':'اختر مهمة واحدة تستحق انتباهك. ينسحب العالم ويبقى العمل.'}</p></div><div class="focus-orbit"><div class="focus-ring ring1"></div><div class="focus-ring ring2"></div><div class="focus-ring ring3"></div><div class="focus-core"><span>${icon('focus')}</span><b>${en?'FOCUS':'تركيز'}</b><small>${en?'One thing at a time.':'شيء واحد في كل مرة.'}</small></div></div><div class="focus-choices">${list.map(x=>`<button class="focus-choice" onclick="startFocus('${esc(x.id)}')"><span>${x.priority==='core'?'01':x.priority==='important'?'02':'03'}</span><div><b>${esc(x.label)}</b><small>${x.duration} ${en?'minutes':'دقيقة'}</small></div><i>↗</i></button>`).join('')||`<div class="note">${en?'The essential field is complete.':'الأساسيات اكتملت.'}</div>`}</div></div>`;
  }
  function renderProgress(){
    const en=state.lang==='en', p=state.progressPeriod||'week';
    const choices=[['day',en?'Day':'يوم'],['week',en?'Week':'أسبوع'],['month',en?'Month':'شهر'],['year',en?'Year':'سنة']];
    const metric=p==='day'?(()=>{const xs=dayTasks(todayName()), done=xs.filter(([id])=>state.today[id]).length;return {consistency:xs.length?Math.round(done/xs.length*100):null,activeDays:done?1:0,planned:xs.length,completedPlanned:done,completed:done,sessions:0,currentStreak:currentStreak()};})():consistencyMetrics(p==='year'?'year':p);
    const ws=worshipSummary(); const tabs=choices.map(([id,label])=>`<button class="progress-tab ${p===id?'active':''}" onclick="setProgressPeriod('${id}')">${label}</button>`).join('');
    return `<div class="progress-room page-room"><div class="room-hero"><div><span class="micro-label">MIHRAB / ${en?'PROGRESS':'التقدم'}</span><h1>${en?'See the shape of your effort.':'تأمل شكل جهدك مع الوقت.'}</h1><p>${en?'One observatory. Change the window, not the place.':'مراقبة واحدة؛ غيّر الفترة، لا المكان.'}</p></div></div><div class="progress-tabs">${tabs}</div><section class="progress-observatory"><div class="progress-main"><div class="progress-number"><span>${metric.consistency==null?'—':metric.consistency+'%'}</span><small>${en?'consistency':'الثبات'}</small></div><div class="progress-orbit"><div class="progress-orbit-inner"><b>${metric.activeDays}</b><small>${en?'active days':'أيام نشطة'}</small></div></div></div><div class="progress-metrics"><div><small>${en?'Planned':'المخطط'}</small><b>${metric.planned}</b></div><div><small>${en?'Completed':'المكتمل'}</small><b>${metric.completedPlanned}</b></div><div><small>${en?'Sessions':'الجلسات'}</small><b>${metric.sessions}</b></div><div><small>${en?'Streak':'التتابع'}</small><b>${metric.currentStreak}</b></div></div></section><section class="progress-mini-grid"><article><span>${en?'Today':'اليوم'}</span><b>${dayTasks(todayName()).filter(([id])=>state.today[id]).length}/${dayTasks(todayName()).length}</b><small>${en?'task field':'ميدان المهام'}</small></article><article><span>${en?'Worship':'العبادة'}</span><b>${ws.prayerDone}/5</b><small>${ws.sunnahDone} ${en?'sunnah':'سنن'}</small></article><article><span>${en?'Meaningful work':'عمل ذو معنى'}</span><b>${metric.completed}</b><small>${en?'recorded events':'أحداث مسجلة'}</small></article></section><section class="review-strip"><div><span class="micro-label">${state.lang==='en'?'WEEKLY REVIEW':'المراجعة الأسبوعية'}</span><h3>${state.weekly.rating?(en?'Recorded.':'مسجلة.'): (en?'A quiet question for the week.':'سؤال هادئ للأسبوع.')}</h3><p>${en?'What was easy to sustain, what kept slipping, and what will you reduce or lock in next week?':'ما الذي التزمت به بسهولة؟ وما الذي استمر يتأجل؟ وما الذي ستخففه أو تثبته الأسبوع القادم؟'}</p></div><button class="btn" onclick="navigate('system')">${en?'Review':'المراجعة'} ↗</button></section></div>`;
  }
  function setProgressPeriod(v){state.progressPeriod=['day','week','month','year'].includes(v)?v:'week';save();rerender()}
  window.setProgressPeriod=setProgressPeriod;
  function toggleSunnah(id){state.worship.sunnah[id]=!state.worship.sunnah[id];recordEvent(state.worship.sunnah[id]?'worship.sunnah.complete':'worship.sunnah.uncomplete',{ritual:id});save();rerender()}
  function addDhikr(n=1){const d=keyDate();if(state.worship.dhikr.date!==d)state.worship.dhikr={date:d,count:0};state.worship.dhikr.count+=n;recordEvent('worship.dhikr',{count:n});save();rerender()}
  function toggleFastToday(){const d=keyDate();state.worship.fasts[d]=!state.worship.fasts[d];recordEvent(state.worship.fasts[d]?'worship.fast.complete':'worship.fast.uncomplete',{day:d});save();rerender()}
  function toggleTaskDetails(id){const row=document.querySelector(`[data-task-id="${CSS.escape(id)}"]`);row?.classList.toggle('expanded')}
  window.toggleSunnah=toggleSunnah;window.addDhikr=addDhikr;window.toggleFastToday=toggleFastToday;window.toggleTaskDetails=toggleTaskDetails;
  function openProjectCreator(){const en=state.lang==='en';openModal(`<div class="mihrab-modal-head"><b>${en?'New project':'ليسروع جديد'}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><label class="field-lite"><span>${en?'Project name':'اسم الليسروع'}</span><input id="projectName"></label><label class="field-lite"><span>${en?'Area':'المجال'}</span><select id="projectArea">${AREA_DEFS.map(([id,ar,enTitle])=>`<option value="${id}">${en?enTitle:ar}</option>`).join('')}</select></label><div class="modal-actions"><button class="btn" onclick="closeMihrabModal()">${en?'Cancel':'إلغاء'}</button><button class="btn primary" onclick="saveProject()">${en?'Create':'إنشاء'}</button></div></div>`)}
  function saveProject(){const name=$('#projectName')?.value.trim();if(!name)return;state.projects.push({id:'p_'+Date.now().toString(36),name,area:$('#projectArea').value,status:'active',progress:0,createdAt:new Date().toISOString()});save();closeModal();rerender()}
  window.openProjectCreator=openProjectCreator;window.saveProject=saveProject;
  function toggleLowEnergy(){state.settings.lowEnergy=!state.settings.lowEnergy;save();applyTheme();rerender()}
  window.toggleLowEnergy=toggleLowEnergy;
  function render(id){
    const renderer={home:renderHome,execution:renderExecution,focus:renderFocusRoom,progress:renderProgress,marketing:renderMarketing,shari:renderShari,quran:renderQuran,courses:renderCourses,system:renderSystem}[id];
    const host=$('#view-'+id); if(!host||typeof renderer!=='function') return;
    host.innerHTML=renderer();
  }
  function paintNav(){
    const en=state.lang==='en';
    const make=([id,ic,ar,enLabel])=>`<a class="nav-btn ${state.view===id?'active':''}" data-view="${id}" href="#${id}" aria-current="${state.view===id?'page':'false'}"><span class="nav-icon">${icon(ic)}</span><span class="nav-label">${esc(en?enLabel:ar)}</span></a>`;
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
    try{render(id);showView(id);paintNav();applyLanguage();applyTheme();document.body.dataset.mode=activeMode();document.body.dataset.lowPower=state.settings.lowPower?'true':'false';auditLocale();auditRenderedLocale();save();}
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

  // One delegated interaction layer. No per-render listeners, no duplicated nav systems.
  document.addEventListener('click',e=>{
    const navLink=e.target.closest('.nav-btn[data-view]');
    if(navLink){e.preventDefault();route(navLink.dataset.view);return;}
    const taskAction=e.target.closest('[data-action]')?.dataset.action;
    if(taskAction==='focus'){startFocus();return;}
    if(e.target.id==='mihrabOverlay') closeModal();
    const command=e.target.closest('[data-command]');
    if(command){const id=command.dataset.command;closeModal();if(VIEWS.includes(id))return id==='focus'?navigate('focus'):navigate(id);if(id==='focus')return navigate('focus');if(id==='capture')return openQuickCapture();if(id.startsWith('smart'))return smartTime(Number(id.slice(5)));if(id==='export')return exportMihrab();}
  });
  document.addEventListener('change',e=>{
    const el=e.target;
    if(!(el instanceof HTMLInputElement||el instanceof HTMLSelectElement)) return;
    if(el.matches('input[type="checkbox"][data-today-id]')) toggleToday(el.dataset.todayId);
    if(el.matches('input[type="checkbox"][data-plan-id]')) togglePlan(el.dataset.planId);
    if(el.matches('[data-weekly-key]')){state.weekly[el.dataset.weeklyKey]=el.type==='checkbox'?el.checked:Number(el.value)||0;save();rerender();}
    if(el.matches('[data-day-type]')){state.weekDayTypes[el.dataset.dayType]=el.value;save();rerender();}
    if(el.matches('[data-rating]')) setWeeklyRating(el.dataset.rating);
    if(el.matches('#lowPowerToggle')){state.settings.lowPower=el.checked;save();document.body.dataset.lowPower=el.checked?'true':'false';rerender();}
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
  window.addEventListener('online',paintNav,{passive:true});window.addEventListener('offline',paintNav,{passive:true});
  const __systemMedia=window.matchMedia?.('(prefers-color-scheme: light)');
  __systemMedia?.addEventListener?.('change',()=>{if(state.theme==='system'){applyTheme();rerender()}});

  let undoTimer=0;
  function showUndo(taskId){
    clearTimeout(undoTimer);
    let toast=document.getElementById('mihrabUndo');
    if(!toast){toast=document.createElement('div');toast.id='mihrabUndo';toast.className='undo-toast';document.body.appendChild(toast);}
    const en=state.lang==='en';
    toast.innerHTML=`<span>${en?'Marked complete.':'تم تسجيل الإنجاز.'}</span><button type="button" onclick="undoToday('${esc(taskId)}')">${en?'Undo':'تراجع'}</button>`;
    toast.classList.add('open');
    undoTimer=setTimeout(()=>toast.classList.remove('open'),4200);
  }
  window.undoToday=id=>{if(!state.today[id])return;state.today[id]=false;recordEvent('task.uncomplete',{taskId:id,day:todayName(),reason:'undo'});clearTimeout(undoTimer);document.getElementById('mihrabUndo')?.classList.remove('open');rerender()};
  function toggleToday(id){
    const was=!!state.today[id]; state.today[id]=!was; if(state.today[id]) recordEvent('task.complete',{taskId:id,day:todayName()}); else recordEvent('task.uncomplete',{taskId:id,day:todayName()});
    const rows=document.querySelectorAll(`[data-task-id="${CSS.escape(id)}"]`); rows.forEach(row=>{row.classList.toggle('done',state.today[id]);if(state.today[id]){row.classList.remove('just-checked');void row.offsetWidth;row.classList.add('just-checked');setTimeout(()=>row.classList.remove('just-checked'),2100)}});
    updateRing();
    if(!was) showUndo(id);
  }
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
  }
  window.toggleToday=toggleToday;window.togglePlan=togglePlan;window.updateRing=updateRing;
  function setWeeklyRating(v){state.weekly.rating=v;state.weekly.review=true;save();rerender()}
  window.setWeeklyRating=setWeeklyRating;

  function startFocus(id){
    const item=id?taskObjects().find(x=>x.id===id):nowNextLater()[0]; if(!item){infoModal(state.lang==='en'?'Core is complete.':'الأساسيات خلصت.');return;}
    const overlay=$('#focusMode'),shell=$('#focusShell'); overlay.classList.add('open');
    let end=Date.now()+(item.duration||25)*60000, done=false;
    function paint(){const left=Math.max(0,Math.ceil((end-Date.now())/1000));const total=(item.duration||25)*60;overlay.style.setProperty('--focus-progress',Math.max(0,Math.min(1,1-left/Math.max(1,total))).toFixed(3));shell.querySelector('.focus-timer').textContent=`${String(Math.floor(left/60)).padStart(2,'0')}:${String(left%60).padStart(2,'0')}`;if(left<=0){if(!done){done=true;state.metrics.focusMinutes+=item.duration||25;state.metrics.sessions++;save()}return;} window.__mihrabFocusRAF=requestAnimationFrame(paint)}
    shell.innerHTML=`<div class="focus-kicker">${state.lang==='en'?'MIHRAB FOCUS':'تركيز مِحْرَاب'}</div><h2>${esc(item.label)}</h2><div class="focus-timer">25:00</div><div class="focus-actions"><button class="btn primary" onclick="finishFocus('${esc(item.id)}');closeFocus()">${state.lang==='en'?'Mark done':'تم'}</button><button class="btn" onclick="extendFocus(5)">+5m</button><button class="btn" onclick="closeFocus()">${state.lang==='en'?'Exit':'خروج'}</button></div>`;
    paint(); window.__mihrabFocusEnd=()=>end; window.__mihrabFocusPaint=paint;
  }
  function extendFocus(min){if(window.__mihrabFocusEnd){const end=window.__mihrabFocusEnd()+min*60000;window.__mihrabFocusEnd=()=>end;cancelAnimationFrame(window.__mihrabFocusRAF||0);window.__mihrabFocusPaint?.();}}
  function closeFocus(){$('#focusMode')?.classList.remove('open');cancelAnimationFrame(window.__mihrabFocusRAF||0);}
  function finishFocus(id){const was=!!state.today[id];state.today[id]=true;if(!was)recordEvent('focus.complete',{taskId:id,duration:durationFor[id]||25});save();closeFocus();rerender()}
  window.startFocus=startFocus;window.extendFocus=extendFocus;window.closeFocus=closeFocus;window.finishFocus=finishFocus;

  function openModal(html){ensureModals();$('#mihrabModal').innerHTML=html;$('#mihrabOverlay').classList.add('open');}
  function ensureModals(){if($('#mihrabOverlay'))return;document.body.insertAdjacentHTML('beforeend',`<div class="mihrab-overlay" id="mihrabOverlay" role="dialog" aria-modal="true"><div class="mihrab-modal" id="mihrabModal"></div></div><input id="mihrabImportInput" type="file" accept="application/json,.json" hidden><div class="focus-mode" id="focusMode"><div class="focus-shell" id="focusShell"></div></div>`)}
  function closeModal(){$('#mihrabOverlay')?.classList.remove('open')}
  window.closeMihrabModal=closeModal;
  function infoModal(message,title){const en=state.lang==='en';openModal(`<div class="mihrab-modal-head"><b>${esc(title||(en?'Note':'ملاحظة'))}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><p style="white-space:pre-line;line-height:1.9;margin:0 0 14px">${esc(message)}</p><div class="modal-actions"><button class="btn primary" onclick="closeMihrabModal()">${en?'OK':'تمام'}</button></div></div>`);}
  window.infoModal=infoModal;
  window.openQuickCapture=()=>openModal(`<div class="mihrab-modal-head"><b>${state.lang==='en'?'Quick Capture':'إضافة سريعة'}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><label class="field-lite"><span>${state.lang==='en'?'Idea / task':'الفكرة / المهمة'}</span><input id="captureText" autofocus></label><div class="form-grid"><label class="field-lite"><span>${state.lang==='en'?'Category':'القسم'}</span><select id="captureCat"><option value="other">${state.lang==='en'?'Other':'أخرى'}</option><option value="career">${state.lang==='en'?'Career':'مهني'}</option><option value="islamic">${state.lang==='en'?'Islamic':'شرعي'}</option><option value="course">${state.lang==='en'?'Course':'كورس'}</option></select></label><label class="field-lite"><span>${state.lang==='en'?'Minutes':'الدقائق'}</span><select id="captureDur"><option>5</option><option selected>15</option><option>30</option><option>45</option><option>60</option><option>90</option></select></label></div><div class="modal-actions"><button class="btn" onclick="closeMihrabModal()">${state.lang==='en'?'Cancel':'إلغاء'}</button><button class="btn primary" onclick="saveQuickCapture()">${state.lang==='en'?'Capture':'احفظ'}</button></div></div>`);
  window.saveQuickCapture=()=>{const text=$('#captureText')?.value.trim();if(!text)return;state.inbox.unshift({id:'in_'+Date.now().toString(36),text,category:$('#captureCat').value,duration:Number($('#captureDur').value)||15,status:'inbox',createdAt:new Date().toISOString()});save();closeModal();rerender()};
  window.completeInbox=id=>{const x=state.inbox.find(i=>i.id===id);if(x){x.status='done';x.doneAt=new Date().toISOString();save();rerender()}};
  window.deleteInbox=id=>{state.inbox=state.inbox.filter(i=>i.id!==id);save();rerender()};

  window.openCommandPalette=()=>{const en=state.lang==='en';openModal(`<div class="mihrab-modal-head"><input id="commandInput" placeholder="${en?'Search or run a command…':'ابحث أو نفّذ أمرًا…'}" oninput="filterCommands(this.value)"><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="command-list" id="commandList"></div>`);filterCommands('');requestAnimationFrame(()=>$('#commandInput')?.focus())};
  window.filterCommands=q=>{const list=$('#commandList');if(!list)return;const en=state.lang==='en';const items=[...NAV.map(x=>[x[0],en?x[3]:x[2],()=>navigate(x[0])]),['focus',en?'Start Focus':'ابدأ التركيز',startFocus],['capture',en?'Quick Capture':'إضافة سريعة',openQuickCapture],['smart5','5m',()=>smartTime(5)],['smart15','15m',()=>smartTime(15)],['smart30','30m',()=>smartTime(30)],['smart45','45m',()=>smartTime(45)],['smart60','60m',()=>smartTime(60)],['smart90','90m',()=>smartTime(90)],['export',en?'Export backup':'تصدير Backup',exportMihrab]].filter(x=>(x[0]+' '+x[1]).toLowerCase().includes((q||'').toLowerCase()));list.innerHTML=items.map(([id,label])=>`<button class="command-item" data-command="${id}"><span>${esc(label)}</span><small>↵</small></button>`).join('')||`<div class="note">${en?'No command found.':'لا يوجد هذا الأمر.'}</div>`};

  function exportMihrab(){const blob=new Blob([JSON.stringify({app:'Mihrab',schemaVersion:state.schemaVersion,exportedAt:new Date().toISOString(),state},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`mihrab-backup-${keyDate()}.json`;a.click();URL.revokeObjectURL(a.href);state.backupAt=new Date().toISOString();save()}
  window.exportMihrab=exportMihrab;
  window.openImport=()=>$('#mihrabImportInput')?.click();
  $('#mihrabImportInput')?.addEventListener('change',e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const p=JSON.parse(r.result);const next=p.state||p;if(!next||typeof next!=='object')throw Error();state={...state,...next};ensureState();save();rerender();infoModal(state.lang==='en'?'Backup restored.':'تم استرجاع النسخة الاحتياطية.')}catch(err){infoModal(state.lang==='en'?'Invalid backup.':'النسخة الاحتياطية غير صالحة.')}};r.readAsText(f);});

  window.addContent=()=>openModal(`<div class="mihrab-modal-head"><b>${state.lang==='en'?'Add track / course':'إضافة مسار / كورس'}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><div class="form-grid"><label class="field-lite"><span>${state.lang==='en'?'Title':'الاسم'}</span><input id="libTitle"></label><label class="field-lite"><span>${state.lang==='en'?'English title':'الاسم بالإنجليزي'}</span><input id="libTitleEn"></label><label class="field-lite"><span>${state.lang==='en'?'Category':'القسم'}</span><select id="libCat"><option value="islamic">${state.lang==='en'?'Islamic':'شرعي'}</option><option value="career">${state.lang==='en'?'Career':'مهني'}</option><option value="course">${state.lang==='en'?'Course':'كورس'}</option><option value="reading">${state.lang==='en'?'Reading':'قراءة'}</option></select></label><label class="field-lite"><span>${state.lang==='en'?'Minutes':'الدقائق'}</span><input id="libDur" type="number" min="1" value="30"></label></div><label class="field-lite"><span>${state.lang==='en'?'Days':'الأيام'}</span><select id="libDays" multiple size="4">${DAYS.map(d=>`<option value="${d}">${state.lang==='en'?I18N[d]||d:d}</option>`).join('')}</select></label><div class="modal-actions"><button class="btn" onclick="closeMihrabModal()">${state.lang==='en'?'Cancel':'إلغاء'}</button><button class="btn primary" onclick="saveContent()">${state.lang==='en'?'Add':'إضافة'}</button></div></div>`);
  window.saveContent=()=>{const title=$('#libTitle')?.value.trim();if(!title)return;state.library.unshift({id:'lib_'+Date.now().toString(36),title,titleEn:$('#libTitleEn').value.trim(),category:$('#libCat').value,duration:Number($('#libDur').value)||30,days:[...$('#libDays').selectedOptions].map(o=>o.value),core:false,important:false,status:'active',sessions:0,completedSessions:0,createdAt:new Date().toISOString()});save();closeModal();rerender()};
  window.archiveContent=id=>{const x=state.library.find(i=>i.id===id);if(!x)return;const en=state.lang==='en';openModal(`<div class="mihrab-modal-head"><b>${en?'Archive this track?':'أرشفة هذا المسار؟'}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><p class="muted" style="margin:0 0 14px;line-height:1.8">${en?'It moves to the Paused tab — you can bring it back anytime.':'هينتقل لتبويب المتوقف — تقدر ترجّعه في أي وقت.'}</p><div class="modal-actions"><button class="btn" onclick="closeMihrabModal()">${en?'Cancel':'إلغاء'}</button><button class="btn primary" onclick="setLibraryStatus('${id}','paused')">${en?'Archive':'أرشفة'}</button></div></div>`);};
  function ensureSeriesHistory(x){ state.history ||= {events:[],series:{},milestones:[],plans:{}}; state.history.series ||= {}; if(!state.history.series[x.id]) state.history.series[x.id]={seriesId:x.id,title:x.title||'',titleEn:x.titleEn||'',category:x.category||'islamic',importance:seriesImportance(x),totalSessions:Number(x.sessions)||0,completedSessions:Number(x.completedSessions)||0,startDate:x.createdAt||null,completionDate:x.completedAt||null}; return state.history.series[x.id]; }
  function addSeriesMilestone(x,p,at){if(![25,50,75,100].includes(p)||!x.sessions)return;state.history.milestones ||= [];const exists=state.history.milestones.some(m=>m.seriesId===x.id&&m.percent===p);if(exists)return;state.history.milestones.push({seriesId:x.id,percent:p,at,completedSessions:x.completedSessions,totalSessions:x.sessions,title:x.title,titleEn:x.titleEn||''});}
  function finalizeSeries(x,completedAt=new Date().toISOString(),auto=false){if(x.status==='done')return false;x.status='done';x.completedAt=completedAt;const h=ensureSeriesHistory(x);h.totalSessions=Number(x.sessions)||h.totalSessions;h.completedSessions=Number(x.completedSessions)||h.completedSessions;h.completionDate=completedAt;recordEvent('series.complete',{seriesId:x.id,title:x.title,titleEn:x.titleEn||'',category:x.category,completedAt,source:auto?'auto':'manual'});addSeriesMilestone(x,100,completedAt);return true;}
  window.completeContent=id=>{const x=state.library.find(i=>i.id===id);if(!x)return;finalizeSeries(x,new Date().toISOString(),false);save();closeModal();rerender()};
  window.activateContent=id=>setLibraryStatus(id,'active');
  function setLibraryStatus(id,status){const x=state.library.find(i=>i.id===id);if(!x)return;if(status==='done')finalizeSeries(x,new Date().toISOString(),false);else{x.status=status;if(status!=='done')x.completedAt=x.completedAt||null;}save();closeModal();rerender()}
  window.completeSession=id=>{const x=state.library.find(i=>i.id===id);if(!x||x.status!=='active'||!Number(x.sessions))return;const total=Number(x.sessions),next=Math.min(total,(Number(x.completedSessions)||0)+1);if(next===(Number(x.completedSessions)||0))return;x.completedSessions=next;const at=new Date().toISOString();recordEvent('series.session.complete',{seriesId:id,title:x.title,titleEn:x.titleEn||'',sessionNumber:next,totalSessions:total});for(const p of [25,50,75])if(next>=Math.ceil(total*p/100))addSeriesMilestone(x,p,at);if(next>=total)finalizeSeries(x,at,true);save();closeModal();rerender()};
  window.editContent=id=>{const x=state.library.find(i=>i.id===id);if(!x)return;openModal(`<div class="mihrab-modal-head"><b>${state.lang==='en'?'Edit track':'تعديل المسار'}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><label class="field-lite"><span>${state.lang==='en'?'Title':'الاسم'}</span><input id="editTitle" value="${esc(x.title||'')}"></label><label class="field-lite"><span>${state.lang==='en'?'Minutes':'الدقائق'}</span><input id="editDur" type="number" min="1" value="${x.duration||30}"></label><div class="modal-actions"><button class="btn" onclick="closeMihrabModal()">${state.lang==='en'?'Cancel':'إلغاء'}</button><button class="btn primary" onclick="saveEditedContent('${id}')">${state.lang==='en'?'Save':'حفظ'}</button></div></div>`) };
  window.saveEditedContent=id=>{const x=state.library.find(i=>i.id===id);if(x){x.title=$('#editTitle').value.trim()||x.title;x.duration=Math.max(1,Number($('#editDur').value)||x.duration);save();closeModal();rerender()}};
  window.openTrackDetails=id=>{const x=state.library.find(i=>i.id===id);if(!x)return;const en=state.lang==='en',title=en&&x.titleEn?x.titleEn:x.title,pr=seriesProgress(x),date=x.completedAt?(en?new Date(x.completedAt).toLocaleDateString():new Date(x.completedAt).toLocaleDateString('ar-EG')):(en?'Unknown':'غير مسجل');openModal(`<div class="mihrab-modal-head"><b>${esc(title)}</b><button class="mihrab-close" onclick="closeMihrabModal()">×</button></div><div class="modal-body"><div class="detail-grid"><div><small>${en?'Status':'الحالة'}</small><b>${seriesStatusLabel(x,en)}</b></div><div><small>${en?'Importance':'الأهمية'}</small><b>${en?(seriesImportance(x)==='core'?'Core':seriesImportance(x)==='important'?'Important':'Optional'):(seriesImportance(x)==='core'?'أساسي':seriesImportance(x)==='important'?'مهم':'اختياري')}</b></div><div><small>${en?'Sessions':'الجلسات'}</small><b>${pr.total?`${pr.done}/${pr.total}`:(en?'Open':'مفتوح')}</b></div><div><small>${en?'Completion':'الإكمال'}</small><b>${esc(date)}</b></div></div><p class="muted" style="line-height:1.8;margin:12px 0 0">${esc(x.purpose|| (en?'A data-driven Islamic track.':'مسار شرعي يعمل من خلال نموذج بيانات موحد.'))}</p><div class="modal-actions">${x.status==='active'&&pr.total>pr.done?`<button class="btn primary" onclick="completeSession('${x.id}')">${en?'Complete next session':'إنهاء الجلسة التالية'}</button>`:''}<button class="btn" onclick="closeMihrabModal()">${en?'Close':'إغلاق'}</button></div></div>`) };

  function systemExtras(){
    const en=state.lang==='en', inbox=state.inbox.filter(x=>x.status==='inbox');
    const tabs=[['active',en?I18N['نشط']:'نشط'],['paused',en?I18N['متوقف']:'متوقف'],['done',en?'Done':'مكتمل']];
    const shown=state.library.filter(x=>x.status===libraryTab);
    const tabsHtml=tabs.map(([id,label])=>`<button class="lib-tab ${libraryTab===id?'active':''}" onclick="setLibraryTab('${id}')">${esc(label)} <span class="tiny muted">${state.library.filter(x=>x.status===id).length}</span></button>`).join('');
    const actionsFor=x=>x.status==='active'
      ?`<button class="tiny-action" onclick="editContent('${x.id}')">${en?I18N['تعديل']:'تعديل'}</button><button class="tiny-action" onclick="completeContent('${x.id}')">${en?I18N['إنهاء']:'إنهاء'}</button><button class="tiny-action" onclick="archiveContent('${x.id}')">${en?I18N['أرشفة']:'أرشفة'}</button>`
      :x.status==='paused'?`<button class="tiny-action" onclick="activateContent('${x.id}')">${en?'Reactivate':'استئناف'}</button>`:'';
    const list=shown.length?shown.map(x=>{const pr=seriesProgress(x);return `<div class="library-item"><button class="library-title-btn" onclick="openTrackDetails('${x.id}')"><b>${esc(en&&x.titleEn?x.titleEn:x.title)}</b><span>↗</span></button><small>${esc(x.category)} · ${x.duration||30} min · ${(x.days||[]).join(' · ')|| (en?'Unscheduled':'غير مجدول')} · ${pr.total?`${pr.done}/${pr.total}`:(en?'Open':'مفتوح')}</small><div class="library-meta"><span class="library-status ${x.status}">${tabs.find(t=>t[0]===x.status)?.[1]||x.status}</span>${actionsFor(x)}</div></div>`}).join(''):`<div class="note">${en?'Nothing here yet.':'لا يوجد شيء هنا بعد.'}</div>`;
    const week=consistencyMetrics('week'), month=consistencyMetrics('month'), quarter=consistencyMetrics('quarter'), year=consistencyMetrics('year'), all=consistencyMetrics('all');
    const cv=m=>m.consistency==null?'—':`${m.consistency}%`;
    const active=m=>m.trackedDays?`${m.activeDays} / ${m.totalDays||m.trackedDays}`:'—';
    const periodCard=(label,m,sub)=>`<div class="timeline-card metric-instrument"><span class="micro-label">${label}</span><b>${cv(m)}</b><span>${sub}</span><small>${m.trackedDays?`${m.activeDays} ${en?'active days':'أيام نشطة'} · ${m.completedPlanned} / ${m.planned} ${en?'planned completed':'منجز من المخطط'}`:(en?'Not tracked yet':'لم يتم تتبعه بعد')}</small></div>`;
    const recent=Object.values(state.history?.series||{}).filter(x=>x.completionDate).sort((a,b)=>String(b.completionDate).localeCompare(String(a.completionDate))).slice(0,5);
    const milestones=(state.history?.milestones||[]).slice().sort((a,b)=>String(b.at).localeCompare(String(a.at))).slice(0,12);
    const recentHtml=recent.length?recent.map(x=>`<div class="history-row"><span class="history-dot"></span><div><b>${esc(en&&x.titleEn?x.titleEn:x.title)}</b><small>${x.completionDate?(en?new Date(x.completionDate).toLocaleDateString():new Date(x.completionDate).toLocaleDateString('ar-EG')):''}</small></div><span>${en?'Completed':'مكتمل'}</span></div>`).join(''):`<div class="note">${en?'No dated completions yet.':'لا توجد إنجازات مؤرخة حتى الآن.'}</div>`;
    const milestonesHtml=milestones.length?milestones.map(m=>`<div class="history-row"><span class="history-orbit">${m.percent}%</span><div><b>${esc(en&&m.titleEn?m.titleEn:m.title)}</b><small>${m.at?(en?new Date(m.at).toLocaleDateString():new Date(m.at).toLocaleDateString('ar-EG')):''}</small></div><span>${en?'Milestone':'محطة'}</span></div>`).join(''):`<div class="note">${en?'Your milestone field will appear here as real progress is recorded.':'هنا تظهر محطات التقدم عندما تُسجل فعليًا.'}</div>`;
    const monthName=m=>m?(en?new Date(m.month+'-02').toLocaleDateString('en',{month:'short',year:'numeric'}):new Date(m.month+'-02').toLocaleDateString('ar-EG',{month:'short',year:'numeric'})):'—';
    const yearCompare=`<section class="section-box insight-compare"><div class="section-title"><div><span class="micro-label">${en?'YEAR / FIELD':'مجال السنة'}</span><h3>${en?'Strongest & weakest month':'أقوى وأضعف شهر'}</h3><p>${en?'Only months with tracked plan data appear.':'تظهر فقط الشهور التي لديها بيانات خطة مسجلة.'}</p></div></div><div class="compare-grid"><div><small>${en?'Strongest':'الأقوى'}</small><b>${monthName(year.strongestMonth)}</b><span>${year.strongestMonth?year.strongestMonth.rate+'%':'—'}</span></div><div><small>${en?'Weakest':'الأضعف'}</small><b>${monthName(year.weakestMonth)}</b><span>${year.weakestMonth?year.weakestMonth.rate+'%':'—'}</span></div><div><small>${en?'Longest streak':'أطول تتابع'}</small><b>${year.bestStreak}</b><span>${en?'days':'أيام'}</span></div></div></section>`;
    const analytics=`<section class="section-box analytics-panel"><div class="section-title"><div><span class="micro-label">${en?'05 / HISTORY FIELD':'05 / حقل التاريخ'}</span><h2>${en?'Consistency & reality':'الثبات والواقع'}</h2><p>${en?'Recorded history only. Unknown periods stay unknown.':'تاريخ مسجل فقط. الفترات غير المعروفة تظل غير معروفة.'}</p></div><span class="badge">${en?'Local-first':'محلي أولًا'}</span></div><div class="metrics-field">${periodCard(en?'WEEK':'أسبوع',week,active(week))}${periodCard(en?'MONTH':'شهر',month,active(month))}${periodCard(en?'QUARTER':'ربع سنة',quarter,active(quarter))}${periodCard(en?'YEAR':'سنة',year,active(year))}${periodCard(en?'ALL-TIME':'كل المدة',all,all.planned?`${all.activeDays} ${en?'active days':'أيام نشطة'}`:(en?'History growing':'التاريخ يتكوّن'))}</div><div class="long-signal" style="margin-top:10px"><div><span class="micro-label">${en?'REALITY / PLAN':'الواقع / الخطة'}</span><h3>${en?'Nothing gets carried forward as punishment.':'لا يوجد ترحيل عقابي للي فات.'}</h3></div><div class="signal-copy"><strong>${all.completed}</strong><span>${en?'completed tasks':'مهمات مكتملة'}</span><em>·</em><strong>${all.sessions}</strong><span>${en?'focus sessions':'جلسات تركيز'}</span><em>·</em><strong>${all.currentStreak}</strong><span>${en?'current streak':'التتابع الحالي'}</span></div></div></section>`;
    return analytics+yearCompare+`<section class="grid grid-2 history-grid"><section class="section-box"><div class="section-title"><div><span class="micro-label">${en?'06 / RECENT WINS':'06 / إنجازات حديثة'}</span><h3>${en?'Recently completed':'تم إنجازه مؤخرًا'}</h3><p>${en?'Dated achievements only; older unknown dates stay unknown.':'الإنجازات المؤرخة فقط؛ التواريخ القديمة غير المعروفة لا يتم اختلاقها.'}</p></div></div><div class="history-list">${recentHtml}</div></section><section class="section-box"><div class="section-title"><div><span class="micro-label">${en?'07 / MILESTONES':'07 / المحطات'}</span><h3>${en?'Achievement timeline':'خط الزمن للإنجاز'}</h3><p>${en?'25 / 50 / 75 / 100% — a record of what you actually built.':'25 / 50 / 75 / 100% — سجل لما بنيته فعلًا.'}</p></div></div><div class="history-list">${milestonesHtml}</div></section></section><section class="section-box lifecycle-card"><div class="section-title"><div><span class="micro-label">${en?'08 / LIBRARY':'08 / المكتبة'}</span><h2>${en?'Long-run system':'النظام على المدى الطويل'}</h2><p>${en?'The plan stays yours; content can evolve without editing code.':'الخطة ملكك، والمحتوى يتغير دون الحاجة إلى تعديل الكود.'}</p></div><button class="btn primary" onclick="addContent()">＋ ${en?'Add track':'إضافة مسار'}</button></div><div class="lib-tabs">${tabsHtml}</div><div class="library-list">${list}</div></section><div class="grid grid-2 lifecycle-grid"><section class="section-box"><h3>${en?'Inbox':'صندوق الوارد'}</h3><p class="muted">${en?'Quick ideas land here first.':'أي فكرة سريعة تدخل هنا أولًا.'}</p>${inbox.length?inbox.slice(0,8).map(x=>`<div class="inbox-item"><div class="grow"><b>${esc(x.text)}</b><small>${x.duration}m</small></div><button class="tiny-action" onclick="completeInbox('${x.id}')">${en?'Done':'تم'}</button><button class="tiny-action" onclick="deleteInbox('${x.id}')">×</button></div>`).join(''):`<div class="note">${en?'Inbox is clear.':'صندوق الوارد فارغ.'}</div>`}<button class="btn" onclick="openQuickCapture()">＋ ${en?'Quick capture':'إضافة سريعة'}</button></section><section class="section-box"><h3>${en?'Backup & restore':'النسخ الاحتياطي'}</h3><p class="muted">${en?'Keep a JSON backup before moving devices or making major changes.':'خذ نسخة JSON قبل نقل الجهاز أو أي تغيير كبير.'}</p><div class="modal-actions"><button class="btn primary" onclick="exportMihrab()">${en?'Export JSON':'تصدير JSON'}</button><button class="btn" onclick="openImport()">${en?'Import':'استيراد'}</button></div></section></div>`;
  }
  const renderSystem=()=>renderSystemBase()+systemExtras();

  function bindThemePointer(){
    if(!window.matchMedia || !matchMedia('(pointer:fine)').matches) return;
    const fine=matchMedia('(pointer:fine)');
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    let raf=0,x=.62,y=.32,tx=x,ty=y;
    const suppressed=()=>!!state.settings?.lowPower || reduced.matches;
    const tick=()=>{
      raf=0;
      if(suppressed()){
        x=.62;y=.32;
        document.documentElement.style.setProperty('--px','62%');
        document.documentElement.style.setProperty('--py','32%');
        return;
      }
      x+=(tx-x)*.12;y+=(ty-y)*.12;
      document.documentElement.style.setProperty('--px',(x*100).toFixed(2)+'%');
      document.documentElement.style.setProperty('--py',(y*100).toFixed(2)+'%');
      if(Math.abs(tx-x)+Math.abs(ty-y)>.002)raf=requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove',e=>{
      if(suppressed()) return;
      tx=e.clientX/Math.max(1,innerWidth);ty=e.clientY/Math.max(1,innerHeight);
      if(!raf)raf=requestAnimationFrame(tick);
    },{passive:true});
    reduced.addEventListener?.('change',()=>{if(suppressed()){tx=.62;ty=.32} if(!raf)raf=requestAnimationFrame(tick)});
    tick();
  }

  const systemScheme=window.matchMedia?.('(prefers-color-scheme: light)');
  systemScheme?.addEventListener?.('change',()=>{if(state.theme==='system'){applyTheme();rerender()}});
  const REQUIRED_I18N=['اليوم','التنفيذ','التركيز','التقدم','النظام','التفاصيل','تعديل','أرشفة','إنهاء','نشط','مكتمل','إيقاع الغرفة الأسبوعي','أساسي','مهم','اختياري','متوقف','استئناف','إيقاف'];
  function auditLocale(){const missing=REQUIRED_I18N.filter(k=>!(k in I18N));const result={ok:missing.length===0,missing};window.__MIHRAB_I18N_AUDIT__=result;if(missing.length)console.error('[Mihrab i18n] Missing translation keys:',missing);return result;}
  function auditRenderedLocale(){const text=document.querySelector('main')?.innerText||'';const bad=state.lang==='ar'?['Core','Active','Details','Edit','Archive','Complete','WEEKLY RHYTHM'].filter(x=>text.includes(x)):[];const result={ok:bad.length===0,bad};window.__MIHRAB_RENDER_I18N_AUDIT__=result;if(bad.length)console.error('[Mihrab i18n] Hardcoded UI strings rendered in Arabic:',bad);return result;}
  window.__MIHRAB_I18N_AUDIT__=auditLocale; auditLocale();
  migrate();librarySeeds();ensureCompletedSeriesSnapshots();applyLanguage();applyTheme();ensureModals();
  const initial=validView((location.hash||'').slice(1)||state.view);route(initial,{scroll:false,push:false});
  bindThemePointer();
  setTimeout(showEntryThreshold,90);
})();


/* Ambient background: CSS animation + pointer fog, no canvas. */
(function(){const a=document.createElement('div');a.className='ambient-fx';a.setAttribute('aria-hidden','true');document.body.prepend(a);})();


/* PWA install */
let deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;document.querySelector('#installBtn')?.removeAttribute('disabled')});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;const b=document.querySelector('#installBtn');if(b){b.textContent='✓';b.disabled=true}});
window.installPWA=async()=>{if(deferredInstallPrompt){await deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;return;}infoModal(state.lang==='en'?'Use the browser menu and choose Install app / Add to Home Screen.':'من قائمة المتصفح اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».')};

window.addEventListener('load',()=>{if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});});
