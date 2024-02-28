let b=alert('Sizda random sonlar chiqishni boshlaydi')

let a =(Math.ceil(Math.random( ) * 99 +1))
alert(`Random orqali chiqgan son ${a} `)

let c =confirm('Biz random sonni 2 ga ko`payrirmoqchi va bo`lmoqchimiz')
let d=(a *2)
let e=(a /2)
let f=(e %2)
alert(`Random orqali topilgan son ${a} edi !
Biz uni 2ga kopaytirib ${d} sonini chiqardik,
Va shu sonni bo'lib : ${e} sonni chiqrdik,
Va shu sonni 3ga bolgandagi qoldiq : ${f} sonni chiqrdik.
`)