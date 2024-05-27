function typeWriterEffect(text, callback) {
    const textArray = text.split('');
    let currentIndex = 0;
    const interval = setInterval(() => {
        if (currentIndex < textArray.length) {
            document.querySelector('.swal2-html-container').innerHTML += textArray[currentIndex];
            currentIndex++;
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 100);
}

function showNextAlert(alertData, delay) {
    setTimeout(() => {
        Swal.fire(alertData);
    }, delay);
}

function mulai() {
    const nama = document.getElementById('nama').value;
    const audio = document.getElementById('myAudio');

    if (nama) {
        document.getElementById('input-container').style.display = 'none';
        document.getElementById('footer').style.display = 'none';
        audio.play();

        Swal.fire({
            title: 'Hai ' + nama + ' 😊',
            html: '<div class="typewriter"></div>',
            imageUrl: 'https://feeldreams.github.io/pusn.gif',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Emot Lucu',
            timer: 5000,
            timerProgressBar: false,
            showConfirmButton: false,
            allowOutsideClick: false,

            didOpen: () => {
                document.querySelector('.swal2-html-container').innerHTML = '';
                typeWriterEffect('Aku cuma mau bilang... 😘', () => {
                    setTimeout(() => {
                        Swal.close();
                        // Lanjutkan menampilkan SweetAlert berikutnya setelah jeda 2 detik
                        Swal.fire({
                            // Tambahkan data SweetAlert berikutnya di sini
                        });
                    }, 300); // Jeda 2 detik sebelum menampilkan SweetAlert berikutnya
                });
            },
            customClass: {
                popup: 'animate__animated animate__fadeInRight my-swal-popup',
                backdrop: 'my-swal-backdrop'
            }
        }).then(() => {

            Swal.fire({
                html: '<div class="typewriter"></div>',
                imageUrl: 'https://feeldreams.github.io/mndkat.gif',
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: 'Emot Lucu',
                // timer: null,
                timerProgressBar: false,
                showConfirmButton: false,
                allowOutsideClick: false,
                didOpen: () => {
                    document.querySelector('.swal2-html-container').innerHTML = '';
                    typeWriterEffect('Selamat malam 🌙', () => {
                        setTimeout(() => {
                            Swal.close();
                            // Lanjutkan menampilkan SweetAlert berikutnya setelah jeda 2 detik
                            Swal.fire({
                                // Tambahkan data SweetAlert berikutnya di sini
                            });
                        }, 300);
                    });
                },
                customClass: {
                    popup: 'animate__animated animate__fadeInRight my-swal-popup',
                    backdrop: 'my-swal-backdrop'
                }
            }).then(() => {
                Swal.fire({
                    html: '<div class="typewriter"></div>',
                    imageUrl: 'https://feeldreams.github.io/ngumpet.gif',
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: 'emot lucu',
                    // timer: null,
                    timerProgressBar: false,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                        document.querySelector('.swal2-html-container').innerHTML = '';
                        typeWriterEffect('Gak boleh tidur malam-malam 🛌', () => {
                            setTimeout(() => {
                                Swal.close();
                                // Lanjutkan menampilkan SweetAlert berikutnya setelah jeda 2 detik
                                Swal.fire({
                                    // Tambahkan data SweetAlert berikutnya di sini
                                });
                            }, 300);
                        });
                    },
                    customClass: {
                        popup: 'animate__animated animate__fadeInRight my-swal-popup',
                        backdrop: 'my-swal-backdrop'
                    }
                }).then(() => {
                    Swal.fire({
                        html: '<div class="typewriter"></div>',
                        imageUrl: 'https://i.pinimg.com/originals/7b/0e/83/7b0e83fd7aa7c57f5084242c60cc61b7.gif',
                        imageWidth: 100,
                        imageHeight: 100,
                        imageAlt: 'Emot Lucu',
                        // timer: null,
                        timerProgressBar: false,
                        showConfirmButton: false,
                        allowOutsideClick: false,
                        didOpen: () => {
                            document.querySelector('.swal2-html-container').innerHTML = '';
                            typeWriterEffect('nanti kamu sakit 🤒', () => {
                                setTimeout(() => {
                                    Swal.close();
                                    // Lanjutkan menampilkan SweetAlert berikutnya setelah jeda 2 detik
                                    Swal.fire({
                                        // Tambahkan data SweetAlert berikutnya di sini
                                    });
                                }, 300);
                            });
                        },
                        customClass: {
                            popup: 'animate__animated animate__fadeInRight my-swal-popup',
                            backdrop: 'my-swal-backdrop'
                        }
                    }).then(() => {
                        Swal.fire({
                            html: '<div class="typewriter"></div>',
                            imageUrl: 'https://feeldreams.github.io/peachbunga2.gif',
                            imageWidth: 100,
                            imageHeight: 100,
                            imageAlt: 'Emot Lucu',
                            showConfirmButton: false,
                            allowOutsideClick: false,
                            didOpen: () => {
                                document.querySelector('.swal2-html-container').innerHTML = '';
                                typeWriterEffect('Selamat beristirahat. Jangan lupa baca doa sebelum bobo... Semangat buat besok jalani harinya! 🌟');
                            },
                            customClass: {
                                popup: 'animate__animated animate__fadeInRight my-swal-popup',
                                backdrop: 'my-swal-backdrop'
                            }
                        });
                    });
                });
            });
        });
    } else {
        document.getElementById('input-container').style.display = 'none';
        document.getElementById('footer').style.display = 'none';
        Swal.fire({
            text: 'Masukkan nama terlebih dahulu!',
            showCancelButton: false,
            confirmButtonText: 'OK',
            customClass: {
                popup: 'my-swal-popup', // Custom class for popup
                backdrop: 'my-swal-backdrop' // Custom class for backdrop
            },
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById('input-container').style.display = 'block';
                document.getElementById('footer').style.display = 'block';

            }
        });
    }
}
