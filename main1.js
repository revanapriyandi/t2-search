var students = [
    {
    Nis : '170700790',
    Name : 'M Revan Apriyandi',
    Avatar : 'img/D01.jpg',
    Alamat : 'Limbanang'
    },
    {
    Nis : '170700799',
    Name : 'Muhammad Lutfi',
    Avatar : 'img/4.jpg',
    Alamat : 'Tanjung Jati'
    },
    {
    Nis : '170700792',
    Name : 'M Akhdanul Wafiy',
    Avatar : 'img/2.jpg',
    Alamat : 'Andiang'
    },
    {
    Nis : '170700714',
    Name : 'Al Azim',
    Avatar : 'img/2.jpg',
    Alamat : 'Mungka'
    },
    {
    Nis : '17070800',
    Name : 'Rizki Fauzan',
    Avatar : 'img/5.jpg',
    Alamat : 'Limbanang'
    },
    {
    Nis : '170700818',
    Name : 'Hamizan Rafiqi Azuris',
    Avatar : 'img/6.jpg',
    Alamat : 'Suliki'
    },
    {
    Nis : '170700786',
    Name : 'Gia',
    Avatar : 'img/7.jpg',
    Alamat : 'Simpang Kapuak'
    },
    {
    Nis : '170700803',
    Name : 'Satria Ramadanol',
    Avatar : 'img/8.jpg',
    Alamat : 'Tobek Panjang'
    },
    {
    Nis : '170700801',
    Name : 'Rizki Ananda',
    Avatar : 'img/9.jpg',
    Alamat : 'Kubang'
    },
    {
    Nis : '170700791',
    Name : 'Reyhan Septio',
    Avatar : 'img/D01.jpg',
    Alamat : 'Padang Kandi'
    },
    {
    Nis : '170700922',
    Name : 'Muhammad Andika',
    Avatar : 'img/2.jpg',
    Alamat : 'Unknown'
    },
    {
    Nis : '170700781',
    Name : 'Arif Habibie',
    Avatar : 'img/3.jpg',
    Alamat : 'Unknown'
    },
    {
    Nis : '1707008788',
    Name : 'Khairul Mustafa',
    Avatar : 'img/4.jpg',
    Alamat : 'Unknown'
    },
    {
    Nis : '170700808',
    Name : 'Yoghie Lailatul Igbal',
    Avatar : 'img/5.jpg',
    Alamat : 'Unknown'
    },
    {
    Nis : '170700823',
    Name : 'Farid',
    Avatar : 'img/6.jpg',
    Alamat : 'Unknown'
    },
    {
    Nis : '170700713',
    Name : 'Ahmad Fuadi',
    Avatar : 'img/7.jpg',
    Alamat : 'Unknown'
    },
    {
    Nis : '170700834',
    Name : 'Qolbi',
    Avatar : 'img/8.jpg',
    Alamat : 'Unknown'
    },
    {
    Nis : '170700838',
    Name : 'Wendi Hermawan',
    Avatar : 'img/9.jpg',
    Alamat : 'Unknown'
    },
    {
    Nis : '170700757',
    Name : 'Muhammad Ridwan',
    Avatar : 'img/2.jpg',
    Alamat : 'Unknown'
    },
    {
    Nis : '170700806',
    Name : 'Syukriatul Zandri',
    Avatar : 'img/3.jpg',
    Alamat : 'Unknown'
    },
    {
    Nis : '1306578',
    Name : 'Asrul H',
    Avatar : 'img/4.jpg',
    Alamat : 'Unknown'
    }
]
//ini untuk proses ketika pencarian data
//ketika tombol cari ditekan
function cari(){
    var ketik = document.getElementById('search').value
    for(var i = 0; i < students.length; i = i + 1){
        if(students[i].Nis == ketik){
            document.getElementById('tampil').textContent = students[i].Name
            document.getElementById('tampil3').textContent = students[i].Nis
            document.getElementById('tampil1').setAttribute("src", students[i].Avatar)
            document.getElementById('tampil2').textContent = students[i].Alamat
        }else if(students[i].Name == ketik){
            document.getElementById('tampil').textContent = students[i].Name
            document.getElementById('tampil3').textContent = students[i].Nis
            document.getElementById('tampil1').setAttribute("src", students[i].Avatar)
            document.getElementById('tampil2').textContent = students[i].Alamat
        }
    }
}