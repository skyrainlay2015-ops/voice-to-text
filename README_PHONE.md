# အသံ → စာ — ဖုန်းနဲ့တည်ဆောက်/အသုံးပြုရန်

ဒီ project က Android Studio မလိုဘဲ browser ကနေ အသုံးပြုနိုင်တဲ့ PWA/Web App ဖြစ်ပါတယ်။

## ပါဝင်တာများ
- MP3 / M4A / WAV စတဲ့ အသံဖိုင်ရွေးခြင်း
- Burmese speech-to-text
- စာသားပြင်ဆင်ခြင်း
- Copy
- TXT သိမ်းခြင်း
- Browser Print → Save as PDF
- Home Screen မှာ App လို ထည့်သုံးနိုင်ခြင်း

## အရေးကြီး
OpenAI API key ကို `public` folder ထဲ မထည့်ပါနှင့်။ Server environment variable `OPENAI_API_KEY` အဖြစ်သာ ထည့်ပါ။

## Server စတင်ရန်
1. Node.js ပါတဲ့ hosting/service တစ်ခုမှာ ဒီ project ကို upload လုပ်ပါ။
2. Environment variable ထဲ `OPENAI_API_KEY` ထည့်ပါ။
3. `npm install`
4. `npm start`
5. ရလာတဲ့ HTTPS URL ကို ဖုန်း Chrome နဲ့ဖွင့်ပါ။
6. Chrome menu → Add to Home screen / Install app ကိုရွေးပါ။

OpenAI transcription model ကို server ကနေခေါ်ထားတာဖြစ်ပြီး API key ကို browser ထဲ မဖော်ပြထားပါ။


## 📱 ဖုန်းတစ်လုံးတည်းနဲ့ Online တင်ရန် (Vercel)

1. Chrome နဲ့ Vercel ကိုဖွင့်ပြီး account ဝင်ပါ။
2. GitHub account မရှိသေးရင် GitHub account တစ်ခုဖွင့်ပါ။
3. ဒီ ZIP ကို ဖြည်ပြီး project ဖိုင်တွေကို GitHub repository အသစ်ထဲ upload လုပ်ပါ။
4. Vercel → Add New Project → အဲဒီ GitHub repository ကို Import လုပ်ပါ။
5. Deploy လုပ်ပါ။
6. Vercel Project → Settings → Environment Variables ထဲဝင်ပါ။
7. Name = `OPENAI_API_KEY`
8. Value = ကိုယ့် OpenAI API key
9. Production ကိုရွေးပြီး Save လုပ်ပါ။
10. ပြီးရင် Redeploy လုပ်ပါ။
11. Vercel ပေးတဲ့ `https://....vercel.app` လိပ်စာကို Chrome နဲ့ဖွင့်ပါ။
12. Chrome menu → Add to Home screen / Install app ကိုရွေးပါ။

⚠️ OpenAI API key ကို `index.html`, `app.js`, GitHub code ထဲ မထည့်ပါနှင့်။ Vercel Environment Variables ထဲမှာသာ ထည့်ပါ။
