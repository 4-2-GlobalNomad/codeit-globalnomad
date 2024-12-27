import * as styles from './Dialog.css';

// 사용법:
// 1. Modal 사용법 참고
// 2. 3번 구문에 <Children /> 대신 <Dialog /> 대입
// 예시:
// {showModal && (
//     <Modal
//         handleModalState={handleModalState}
//         content={<Dialog handleModalState={handleModalState} message='Dialog의 안내 메세지 어쩌고 저쩌고.' />}
//     />
//     )}

export default function Dialog(props: { handleModalState: () => void; message: string }) {
  return (
    <div className={styles.content}>
      <p className={styles.message}>{props.message}</p>
      <button className={styles.button} onClick={props.handleModalState}>
        확인
      </button>
    </div>
  );
}
