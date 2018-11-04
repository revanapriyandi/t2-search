var lokers = ['Anton','Rizki','Lutfi','Revan','Wafiy','Azim','Mizan']

console.log(lokers[lokers.length - 1])



//if else
//for

var hari = 'tidak hujan'

if(hari == 'hujan') {
    console.log('Saya memakai jazz hujan')
}else{
    console.log('Saya tidak memakai jazz hujan')
}

var umur = '17'
var uang = '10000'

if(umur >= '18' && uang == '100000'){
    console.log('Selamat Datang')
    console.log('Anda bisa membeli 2 minuman')
}else if(umur >= '18'&& uang == '50000' ){
    console.log('Selamat Datang')
    console.log('Anda cuma bisa membeli 1 minuman')
}else if(umur <= '17'){
    console.log('Umur anda belum cukup silahkan datang jika umur anda sudah 18 tahun')
    console.log('Salam Jumpa')
}else{
    console.log('-_-')
    console.log('Uang Anda tidak cukup , ( Ang KERE)')
}


    var student = [
        {
            name : 'John Doe',
            Address : 'Padang'
        },
        {
            name : 'Revan',
            Address : 'Limbanang'
        },
        {
            name : 'Wafiy',
            Address : 'Andiang'
        }
    ]

    for(var i = 0; i < student.length; i = i + 1){
        console.log('Nama :', student[i].name)
        console.log('Alamat : ', student[i].Address)
    }

