import { ReactNode } from 'react';
import * as styles from './Modal.css';

// 사용법:

// 1. 페이지(부모 컴포넌트)에 모달 노출상태를 저장하는 state와 이를 토글할 handler를 정의하세요
// 예시:
//   const [showModal, setShowModal] = useState(false);
//   const handleModalState = () => setShowModal(!showModal);

// 2. 모달이 켜져야 하는 기믹에 핸들러를 연결하세요요
// 예시:
//   <button onClick={handleModalState}>모달</button>

// 3. 부모 컴포넌트 안에 해당 구문 추가하세요
// {showModal && createPortal(
//    <Modal handleModalState={handleModalState} content={<Children handleModalState={handleModalState} />} />,
//    document.body
//    )}
// 이때 content로 전달하는 요소, <Children /> 를 직접 개발한 컴포넌트로 교체하세요
// 모달을 끄는 버튼 등을 만들기 위해서는 <Children />에도 handler를 전달해서 이용하세요 아니면 외부영역을 클릭해서 끄는것만 가능합니다

export default function Modal(props: { handleModalState: () => void; content: ReactNode }) {
  return (
    <div className={styles.background} onClick={props.handleModalState}>
      <div className={styles.modalArea} onClick={(e) => e.stopPropagation()}>
        {props.content}
      </div>
    </div>
  );
}
