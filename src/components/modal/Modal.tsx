import { JSX } from 'react';
import * as styles from './Modal.css';

// 사용법:

// 1. 페이지(부모 컴포넌트)에 모달 노출상태를 저장하는 state와 이를 토글할 handler를 정의하세요
// 예시:
//   const [showModal, setShowModal] = useState(false);
//   const handleModalState = () => setShowModal(!showModal);

// 2. 특정 버튼클릭 혹은 함수동작에 모달이 켜지도록 handler를 연결하세요
// 예시:
//   <button onClick={handleModalState}>모달</button>

// 3. 페이지(부모 컴포넌트)의 최상위 컴포넌트 바로 안에 해당 구문 추가하세요
// {showModal && (
//      <Modal handleModalState={handleModalState} content={<Children handleModalState={handleModalState} />} />
//      )}
// 이때 content로 전달하는 요소, <Children /> 를 직접 개발한 컴포넌트로 교체하세요
// 모달을 끄는 기능을 이용하기 위해서는 handler를 전달해서 이용하세요 아니면 외부영역을 클릭해서 끄는것만 가능합니다

// 위치 예시:
//  <div className={styles.parent}>
//     <div>페이지 구현 부분</div>
//     {showModal && (<Modal  />)}
//  </div>

export default function Modal(props: { handleModalState: () => void; content: JSX.Element }) {
  return (
    <div className={styles.background} onClick={props.handleModalState}>
      <div className={styles.modalArea} onClick={(e) => e.stopPropagation()}>
        {props.content}
      </div>
    </div>
  );
}
