
import styles from "../styles/Home.module.css"
export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.title}>
          Chúng tôi khuyên bạn nên tạo một ứng dụng Next.js mới bằng cách sử
          dụng create-next-app, ứng dụng này sẽ tự động thiết lập mọi thứ cho
          bạn. Để tạo một dự án, hãy chạy:
        </p>
        <p className={styles.title}>
          Bên trong thư mục, hãy pagesthêm index.jstệp để bắt đầu. Đây là trang
          được hiển thị khi người dùng truy cập vào thư mục gốc của ứng dụng của
          bạn.
        </p>
      </div>
    </>
  );
}
