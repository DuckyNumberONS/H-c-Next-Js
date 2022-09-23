import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Chúng tôi khuyên bạn nên tạo một ứng dụng Next.js mới bằng cách sử
          dụng create-next-app, ứng dụng này sẽ tự động thiết lập mọi thứ cho
          bạn. Để tạo một dự án, hãy chạy:
        </p>
        <p className={styles.text}>
          Bên trong thư mục, hãy pagesthêm index.jstệp để bắt đầu. Đây là trang
          được hiển thị khi người dùng truy cập vào thư mục gốc của ứng dụng của
          bạn.
        </p>
        <Link href="/coders">
          <button className="btn">See All Coders</button>
        </Link>
        <style jsx>
          {
            `
            .btn{
              display:block;
              width:150px;
              padding:8px 0;
              margin:20px auto;
              background:#ffbf49;
              border-radius:4px;
              color:black;
              text-align:center;
            }
            `
          }
        </style>
      </div>
    </>
  );
}
