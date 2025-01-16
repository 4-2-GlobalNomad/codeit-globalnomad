import * as styles from './Children.css';

// modal 이용시 기본으로 보여지는 하위 컴포넌트
// 이 컴포넌트를 수정하지 말고 Modal의 content 요소를 직접 개발한 컴포넌트로 교체하는 방식으로 이용하세요

export default function Children(props: { handleModalState: () => void }) {
  return (
    <div className={styles.content}>
      <p className={styles.message}>기본 모달입니다</p>
      <p className={styles.message}>사용법을 참고하고 본문을 교체해주세요</p>
      <button className={styles.button} onClick={props.handleModalState}>
        닫기
      </button>
    </div>
  );
}
