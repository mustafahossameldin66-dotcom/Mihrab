const fs=require('fs');
const s=fs.readFileSync('app.js','utf8');
const required=['اليوم','التنفيذ','التركيز','التقدم','النظام','التفاصيل','تعديل','أرشفة','إنهاء','نشط','مكتمل','أساسي','مهم','اختياري','متوقف','استئناف','إيقاف'];
const missing=required.filter(k=>!new RegExp("['\\\"]"+k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+"['\\\"]:").test(s));
const banned=['>Core<','>Active<','>Details<','>Edit<','>Archive<','>Complete<','>WEEKLY RHYTHM<'];
const outsideTable=s.replace(/const I18N=\{[\s\S]*?\n\};/,'');
const leaked=banned.filter(x=>outsideTable.includes(x));
if(missing.length||leaked.length){
 console.error('[Mihrab i18n] FAIL');
 if(missing.length) console.error('Missing:',missing.join(', '));
 if(leaked.length) console.error('Leaked UI tokens:',leaked.join(', '));
 process.exit(1);
}
console.log('[Mihrab i18n] PASS — required locale keys present and banned UI tokens are not rendered directly in source templates.');
