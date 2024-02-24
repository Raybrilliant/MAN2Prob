import { Bowlby_One_SC } from "next/font/google";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EmojiAnimate from "@/components/animate/EmojiAnimate";
import CardAnimate from "@/components/animate/CardAnimate";
import Navbar from "@/components/Navbar";
import TextAnimate from "@/components/animate/TextAnimate";
import CounterAnimate from "@/components/animate/CounterAnimate";
import SecondCardAnimate from "@/components/animate/SecondCardAnimate";
import Link from "next/link";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="space-y-4">
      <CardAnimate>
        <div className="w-full h-screen bg-[#5A9760] flex flex-col rounded-3xl uppercase p-5 text-white">
          <TextAnimate>
            <Navbar />
          </TextAnimate>
          <div
            className={`${bowlby.className} text-8xl text-white text-center mx-auto my-auto max-lg:text-5xl`}
          >
            Membentuk Generasi <EmojiAnimate>👨‍🎓</EmojiAnimate> Unggul Berbasis
            <span className="hover:text-[#E6A65A] transition-all ease-out duration-200 cursor-grab">
              {" "}
              Islam
            </span>{" "}
            dan <EmojiAnimate>🌐</EmojiAnimate>{" "}
            <span className="hover:text-[#E6A65A] transition-all ease-out duration-200 cursor-grab">
              {" "}
              Teknologi
            </span>
          </div>
          <TextAnimate>
            <div className="flex justify-between">
              <div className="capitalize max-lg:hidden">
              <p>MAN 2 Kota Probolinggo</p>
              <p>MA Plus Keterampilan dan Riset</p>
              </div>
              <div className="flex -space-x-2 max-lg:mx-auto">
                <Avatar>
                  <AvatarImage src="/avatar-1.png"/>
                  <AvatarFallback>RF</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/avatar-2.jpeg"/>
                  <AvatarFallback>RB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="ms-3 font-bold text-3xl">1RB+</p>
                  <p className="ms-3 text-sm">Pelajar Aktif</p>
                </div>
              </div>
            </div>
          </TextAnimate>
        </div>
      </CardAnimate>
      {/* Section 2 */}
      <CardAnimate>
        <div className="w-full p-12 bg-[#F3F3F3] rounded-2xl flex flex-col max-lg:p-8">
          <TextAnimate>
            <h2 className="font-extrabold uppercase text-4xl text-center max-lg:text-xl">
              Bukti Kualitas Kami: Tingkat Kelulusan Tinggi, Alumni Sukses
              Meraih Kampus Impian Mereka!
            </h2>
          </TextAnimate>
          <div className="flex justify-around my-10 max-lg:grid max-lg:grid-cols-2 max-lg:gap-10">
            <div className="text-center">
              <div className={`${bowlby.className} font-bold text-8xl mx-auto max-lg:text-5xl`}>
                <CounterAnimate target={90} />%
              </div>
              <p className="font-bold text-xl w-[75%] mx-auto max-lg:text-sm max-lg:font-medium">
                Melanjutkan ke Perguruan Tinggi*
              </p>
            </div>
            <div className="text-center">
              <div className={`${bowlby.className} font-bold text-8xl mx-auto max-lg:text-5xl`}>
                <CounterAnimate target={31} />
              </div>
              <p className="font-bold text-xl w-[75%] mx-auto max-lg:text-sm max-lg:font-medium">
                Diterima Jalur SNBP
              </p>
            </div>
            <div className="text-center">
              <div className={`${bowlby.className} font-bold text-8xl mx-auto max-lg:text-5xl`}>
                <CounterAnimate target={130} />
              </div>
              <p className="font-bold text-xl w-[70%] mx-auto max-lg:text-sm max-lg:font-medium">
                Diterima Jalur SNBT*
              </p>
            </div>
            <div className="text-center">
              <div className={`${bowlby.className} font-bold text-8xl mx-auto max-lg:text-5xl`}>
                <CounterAnimate target={1} />
              </div>
              <p className="font-bold text-xl w-[70%] mx-auto max-lg:text-sm max-lg:font-medium">
                Diterima Sekolah Kedinasan
              </p>
            </div>
          </div>
        </div>
      </CardAnimate>
      {/* Section 3 */}
      <CardAnimate>
        <div className="w-full p-5 bg-[#F3F3F3] rounded-2xl flex flex-col">
          <div className="grid grid-cols-2 gap-5 place-items-center max-lg:grid-cols-1">
            <h3 className="font-extrabold uppercase text-6xl max-lg:text-3xl">
              Jelajahi Lebih Lanjut tentang Kami
            </h3>
            <SecondCardAnimate>
              <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1 max-lg:grid-rows-2">
                <Card className="relative p-8 rounded-2xl border-none bg-[#E6A65A] space-y-5 text-white h-[30rem]">
                  <h5 className="font-extrabold text-4xl uppercase tracking-tight leading-tight">
                    Kenali Visi Misi Kami
                  </h5>
                  <p className="">
                    Terwujudnya Madrasah yang Islami, Unggul, Terampil
                    Teknologi, Tangguh dalam Imtaq, dan Berbudaya Lingkungan
                  </p>
                  <div className="absolute inset-0 flex p-8">
                    <h1 className="text-7xl mt-auto mb-5 ms-8">📚</h1>
                    <h1 className="text-7xl mt-auto mb-16 ms-8">💯</h1>
                  </div>
                </Card>
                <Card className="relative p-8 rounded-2xl border-none bg-[#5A9760] space-y-5 text-white">
                  <Link href={"https://www.youtube.com/watch?v=SQtGweGXPlE"} target="_blank">
                    <div className="hover:px-3 py-2 w-fit flex place-items-center hover:text-black hover:bg-white mix-blend-screen rounded-full space-x-2 transition-all ease-in-out duration-500 ms-auto">
                      <p>Lihat Video</p>
                      <ArrowUpRight className="inline-block bg-white text-black rounded-full py-1" />
                    </div>
                  </Link>
                  <h5 className="absolute bottom-8 font-extrabold text-4xl uppercase tracking-tight leading-tight">
                    Tonton Video Profil Kami
                  </h5>
                </Card>
              </div>
            </SecondCardAnimate>
          </div>
        </div>
      </CardAnimate>
      {/* Section 4 */}
      <CardAnimate>
        <div className="w-full p-5 bg-[#F3F3F3] rounded-2xl flex flex-col">
          <div className="grid  grid-cols-3 gap-5 max-lg:grid-cols-1">
            <Card className="rounded-2xl border-none overflow-hidden">
              <img src="/img/ma_plus.png" alt="3d-image" />
              <div className="p-5 space-y-3">
                <h5 className="font-semibold text-2xl">MA Plus Keterampilan</h5>
                <p className="text-sm text-muted-foreground">
                  Menawarkan program multimedia, robotik, animasi, film, desain
                  grafis, DKV, aplikasi perkantoran, RPL, TKJ, dan operator
                  komputer. Persiapkan masa depan Anda di dunia teknologi dengan
                  kami!
                </p>
              </div>
            </Card>
            <Card className="rounded-2xl border-none overflow-hidden">
              <img src="/img/research.png" alt="3d-image" />
              <div className="p-5 space-y-3">
                <h5 className="font-semibold text-2xl">
                  Program Madrasah Riset
                </h5>
                <p className="text-sm text-muted-foreground">
                  Mengembangkan budaya akademik berbasis riset dan menghasilkan
                  riset yang bermantaat untuk pengembangan lImu Pengetahuan dan
                  Teknologi
                </p>
              </div>
            </Card>
            <Card className="rounded-2xl border-none overflow-hidden">
              <img src="/img/pdcibi.png" alt="3d-image" />
              <div className="p-5 space-y-3">
                <h5 className="font-semibold text-2xl">
                  Peserta Didik Cerdas Istimewa Bakat Istimewa
                </h5>
                <p className="text-sm text-muted-foreground">
                  Kurikulum bagi peserta didik yang memenuhi syarat dimana
                  program ini dapat mempersingkat waktu peserta didik dalam
                  proses belajar mengajar menjadi 2 tahun
                </p>
              </div>
            </Card>
            <Card className="rounded-2xl border-none overflow-hidden">
              <img src="/img/tahfidz.png" alt="3d-image" />
              <div className="p-5 space-y-3">
                <h5 className="font-semibold text-2xl">Tahfidz</h5>
                <p className="text-sm text-muted-foreground">
                  Didukung dengan beberapa metode dalam menghafal Al-Quran dan
                  guru pendamping agar memperlancar dan mempermudah siswa dalam
                  proses pembelajaran tahfidz
                </p>
              </div>
            </Card>
            <Card className="rounded-2xl border-none overflow-hidden">
              <img src="/img/ibb.png" alt="3d-image" />
              <div className="p-5 space-y-5">
                <h5 className="font-semibold text-2xl">
                  Kelas Ilmu Bahasa dan Budaya
                </h5>
                <p className="text-sm text-muted-foreground">
                  Salah satu jurusan yang tersedia bagi siswa di madrasah yang
                  bertujuan untuk mengembangkan pemahaman dan keterampilan dalam
                  bidang bahasa dan budaya
                </p>
              </div>
            </Card>
            <Card className="rounded-2xl border-none overflow-hidden">
              <img src="/img/iik.png" alt="3d-image" />
              <div className="p-5 space-y-5">
                <h5 className="font-semibold text-2xl">
                  Kelas Ilmu Ilmu Keagamaan
                </h5>
                <p className="text-sm text-muted-foreground">
                  Salah satu jurusan yang tersedia bagi siswa di madrasah yang
                  bertujuan untuk meningkatkan pemahaman, keimanan, penghayatan,
                  dan pengamalan peserta didik tentang agama
                </p>
              </div>
            </Card>
          </div>
        </div>
      </CardAnimate>
      {/* Section 5 */}
      <CardAnimate>
        <div className="w-full p-12 bg-[#F3F3F3] rounded-2xl flex flex-col max-lg:p-8">
          <h3 className="font-extrabold text-4xl uppercase text-center max-lg:text-xl">
            Bergabunglah dengan kami dan temukan potensi Anda untuk masa depan
            yang gemilang!
          </h3>
          <div className="grid grid-cols-2 gap-4 my-10 max-lg:flex max-lg:flex-col-reverse">
            <Card className="p-5 rounded-2xl border-none">
              <iframe
                style={{ height: "100%", width: "100%", border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=MAN+2+Kota+Probolinggo,+Jalan+Soekarno+-+Hatta,+Curahgrinting,+Probolinggo+City,+East+Java,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </Card>
            <div className="grid grid-rows-2 gap-4">
              <Card className="p-8 rounded-2xl border-none bg-[#E6A65A] text-white space-y-5">
                <h5 className="text-2xl font-bold uppercase tracking-tight leading-tight w-[80%]">
                  PENERIMAAN PESERTA DIDIK BARU MADRASAH (PPDBM) TAHUN PELAJARAN
                  2024-2025
                </h5>
                <p className="text-sm text-muted w-[80%]">
                  Pendaftaran masih dibuka hingga tanggal 23 Februari. Ayo
                  segera daftarkan diri Anda sebelum waktu pendaftaran ditutup!
                </p>
                <Link href={"https://man2kotaprobolinggo.sch.id/ppdb-man-2-kota-probolinggo/"}>
                    <div className="hover:px-3 py-2 w-fit flex place-items-center hover:text-black hover:bg-white mix-blend-screen rounded-full space-x-2 transition-all ease-in-out duration-500 mt-5">
                      <p>Pelajari Lebih Lanjut</p>
                      <ArrowUpRight className="inline-block bg-white text-black rounded-full py-1" />
                    </div>
                </Link>
              </Card>
              <Card className="p-8 rounded-2xl border-none bg-[#5A9760] text-white space-y-5">
                <h5 className="text-2xl font-bold uppercase tracking-tight leading-tight w-[80%]">
                  Jelajahi prestasi kami di sini! Dengan bangga
                </h5>
                <p className="text-sm text-muted w-[80%]">
                  Kami telah mencapai berbagai keunggulan. Temukan kesuksesan
                  siswa kami dalam berbagai kompetisi, penghargaan, dan
                  pencapaian lainnya yang membanggakan.
                </p>
                <Link href={"https://man2kotaprobolinggo.sch.id/category/prestasi/"}>
                    <div className="hover:px-3 py-2 w-fit flex place-items-center hover:text-black hover:bg-white mix-blend-screen rounded-full space-x-2 transition-all ease-in-out duration-500 mt-5">
                      <p>Pelajari Lebih Lanjut</p>
                      <ArrowUpRight className="inline-block bg-white text-black rounded-full py-1" />
                    </div>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </CardAnimate>
        <p className="text-center">Copyright©2024 <Link href={'https://raybrilliant.pages.dev/'} target="_blank" className="hover:text-[#5A9760]">Raybrilliant</Link></p>
    </main>
  );
}
