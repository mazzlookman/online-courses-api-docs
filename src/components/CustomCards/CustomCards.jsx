import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from "@docusaurus/Link";

export default function CustomCards() {
    return (
        <>
            <div className="cards-container">
                <div className="card-me">
                        <img src="https://img.icons8.com/?size=100&id=20750&format=png&color=000000"
                             alt="User Icon"/>
                        <div className="card-me-title">User API</div>
                        <div className="card-me-description">Mengelola informasi user, termasuk register, login, view
                            profile, dan logout user.
                        </div>
                    </div>
                <div className="card-me">
                        <img src="https://img.icons8.com/?size=100&id=ZlF0cOlZpNah&format=png&color=000000"
                             alt="Mentor Icon"/>
                        <div className="card-me-title">Author API</div>
                        <div className="card-me-description">Mengelola data pembuat konten, termasuk informasi profil,
                            pembuatan, dan pembaruan data penulis.
                        </div>
                    </div>
                <div className="card-me">
                    <img src="https://img.icons8.com/?size=100&id=31362&format=png&color=000000"
                        alt="Course Icon"/>
                    <div className="card-me-title">Course API</div>
                    <div className="card-me-description">Menangani informasi kursus, termasuk pembuatan, pembaruan, dan
                        penghapusan kursus.
                    </div>
                </div>
                <div className="card-me">
                        <img src="https://img.icons8.com/?size=100&id=dN8m9joMwymk&format=png&color=000000"
                             alt="category icon"/>
                        <div className="card-me-title">Category API</div>
                        <div className="card-me-description">Menangani kategori atau label yang digunakan untuk
                            mengelompokkan kursus, termasuk pembuatan, pembaruan, dan penghapusan kategori.
                        </div>
                    </div>
                <div className="card-me">
                        <img src="https://img.icons8.com/?size=100&id=12174&format=png&color=000000"
                             alt="image course icon"/>
                        <div className="card-me-title">Course Image API</div>
                        <div className="card-me-description">Mengelola gambar yang terkait dengan kursus, termasuk
                            mengunggah, mengunduh, dan menghapus gambar kursus.
                        </div>
                    </div>
                <div className="card-me">
                        <img src="https://img.icons8.com/?size=100&id=b34kIRWuOKcZ&format=png&color=000000"
                             alt="Chapter Icon"/>
                        <div className="card-me-title">Chapter API</div>
                        <div className="card-me-description">Mengelola bagian-bagian atau modul-modul dalam kursus,
                            termasuk pembuatan, pembaruan, dan penghapusan bab.
                        </div>
                    </div>
                <div className="card-me">
                        <img src="https://img.icons8.com/?size=100&id=EbYF8pfMyG6l&format=png&color=000000"
                             alt="Lesson Icon"/>
                        <div className="card-me-title">Lesson API</div>
                        <div className="card-me-description">Menangani informasi pelajaran atau materi yang diajarkan dalam
                            kursus, termasuk pembuatan, pembaruan, dan penghapusan pelajaran.
                        </div>
                    </div>
                <div className="card-me">
                        <img src="https://img.icons8.com/?size=100&id=41013&format=png&color=000000"
                             alt="Payment Icon"/>
                        <div className="card-me-title">Payment API</div>
                        <div className="card-me-description">Mengelola transaksi pembayaran untuk mengakses kursus atau
                            fitur tambahan, termasuk proses pembayaran, verifikasi, dan pemrosesan pembayaran.
                        </div>
                    </div>
                <div className="card-me">
                        <img src="https://img.icons8.com/?size=100&id=lBmbCyx0kpsY&format=png&color=000000"
                             alt="Enrollment Icon"/>
                        <div className="card-me-title">Enrollment API</div>
                        <div className="card-me-description">Menangani informasi pendaftaran atau enroll pengguna dalam
                            kursus tertentu, termasuk pembuatan, pembaruan, dan penghapusan pendaftaran.
                        </div>
                    </div>
            </div>
        </>
    );
}