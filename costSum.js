/* -------

২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি সিঙ্গারা এর দাম – ৭ টাকা

১ টি সমুচা এর দাম – ১০ টাকা 

১ টি জিলাপি এর দাম – ১৫ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

------ */

function pandaCost (সিঙ্গারা, সমুচা, জিলাপি ){
    const perSingara = 7;
    const perSamucha = 10;
    const perJilapi = 15;
// total price
    const sumSingara = সিঙ্গারা * perSingara;
    const sumSamucha = সমুচা * perSamucha;
    const sumJilapi = জিলাপি * perJilapi;

    const totalPanda =sumSingara + sumSamucha + sumJilapi;
    return totalPanda;

}

console.log(pandaCost(1,1,1));