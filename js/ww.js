console.log('MASSSSUK AWAL  SCRIPT.JS');
/* ----------------Data Formulir----------------- */
document.getElementById('form').addEventListener('submit', function(event) { console.log('MASUKK SUBMITT');

   event.preventDefault();  // Agar form tidak mengirim data ke server

   var nama = document.getElementById('nama').value;
   var NIM = document.getElementById('NIM').value;
   var prodi = document.getElementById('prodi').value;
   var JK = document.getElementById('JK').value;
   var tgl = document.getElementById('tgl').value;
   var alamat = document.getElementById('alamat').value;
   var email = document.getElementById('email').value;
   var pass = document.getElementById('pass').value;

   // Menyimpan data ke dalam session storage
   sessionStorage.setItem('nama', nama);
   sessionStorage.setItem('NIM', NIM);
   sessionStorage.setItem('prodi', prodi);
   sessionStorage.setItem('JK', JK);
   sessionStorage.setItem('tgl', tgl);
   sessionStorage.setItem('alamat', alamat);
   sessionStorage.setItem('email', email);
   sessionStorage.setItem('pass', pass);

   // Pindah halaman
   window.location.href = '../table.html';

});


// membuat eventlister ketika DOM loaded atau ketika html di load oleh browser
document.addEventListener('DOMContentLoaded', function() {

console.log('INI MASUK KEDUAAAA SCRIPT.JS');

   var nama = sessionStorage.getItem('nama');
   var NIM = sessionStorage.getItem('NIM');
   var prodi = document.getItem('prodi');
   var JK = document.getItem('JK');
   var tgl = document.getItem('tgl');
   var alamat = document.getItem('alamat');
   var email = document.getItem('email');
   var pass = document.getItem('pass');

   // Mengecek apakah data tersedia di sessionStorage
   if (nama && NIM && prodi && JK && tgl && alamat && email && pass) {

      var table = document.getElementById('table').getElementsByTagName('tbody')[4];
      var newRow = table.insertRow(table.rows.length);

      var cell1 = newRow.insertCell(0);
      cell1.innerHTML = nama;

      var cell2 = newRow.insertCell(1);
      cell2.innerHTML = NIM;

      var cell3 = newRow.insertCell(2);
      cell3.innerHTML = prodi;

      var cell4 = newRow.insertCell(3);
      cell4.innerHTML = JK;

      var cell5 = newRow.insertCell(4);
      cell5.innerHTML = tgl;

      var cell6 = newRow.insertCell(5);
      cell6.innerHTML = alamat;

      var cell7 = newRow.insertCell(6);
      cell7.innerHTML = email;

      var cell8 = newRow.insertCell(7);
      cell8.innerHTML = pass;
   }
});
 
 
 /* ----------------Animasi Sidebar----------------- */
   const sidebar = document.querySelector('.sidebar');
   const content = document.querySelector('.content');
   const footer = document.getElementById('footer');
   const navbar = document.getElementById('navbar');

   sidebar.addEventListener('mouseenter', () => {
      content.style.filter = 'blur(1px)';
      footer.style.filter = 'blur(1px)';
      navbar.style.filter = 'blur(1px)';
   });

   sidebar.addEventListener('mouseleave', () => {
      content.style.filter = '';
      footer.style.filter = '';
      navbar.style.filter = '';
   });


 /* ----------------Animasi Loop Typing----------------- */
 const typedTextElement = document.getElementById('typing-text');
 const textToType = "Homepage";

 function typeText() {
    let i = 0;
    typedTextElement.textContent = "";

    function type() {
       if (i < textToType.length) {
             typedTextElement.textContent += textToType.charAt(i);
             i++;
             setTimeout(type, 100); // Waktu type huruf (100ms)
       } else {
             setTimeout(eraseText, 500); // Tunggu 0.5 detik sebelum menghapus teks
       }
    }

    function eraseText() {
       if (i >= 0) {
             typedTextElement.textContent = textToType.substring(0, i);
             i--;
             setTimeout(eraseText, 100); // Waktu hapus huruf (100ms)
       } else {
             setTimeout(type, 50); // Tunggu 0.05 detik sebelum mulai mengetik lagi
       }
    }

    type(); // Memulai animasi
 }

 typeText(); // Memulai animasi pertama

 