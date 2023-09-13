//import { Modal } from 'antd';
//import { useState } from 'react';

// export interface StyleType {
//   background: {
//     color: string;
//     gradation: boolean;
//     imageUrl: string | null;
//   };

//   block: {
//     shape: '0px' | '7px' | '14px';
//     style: 'dark' | 'shadow' | 'flat';
//     gradation: boolean;
//   };
//   theme: ('modern' | 'classic' | 'simple' | 'dark') | null;
// }

// interface CustomizationModalProps {
//   isModalOpen: boolean;
//   handleOk: () => void;
//   handleCancel: () => void;
// }

// export const CustomizationModal = ({
//   isModalOpen,
//   handleOk,
//   handleCancel,
// }: CustomizationModalProps) => {
//   return (
//     <>
//       <Modal
//         title="스타일 설정"
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       ></Modal>
//     </>
//   );
// };

// export default function CustomizationModal({
//   isModalOpen,
//   handleOk,
//   handleCancel,
// }: CustomizationModalProps) {
//   const [style, setStyle] = useState<StyleType>({
//     background: {
//       color: '#eee',
//       gradation: false,
//       imageUrl: null,
//     },
//     block: {
//       shape: '0px',
//       style: 'flat',
//       gradation: false,
//     },
//     theme: null,
//   });

//   const handleRadioChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//     category: keyof StyleType,
//   ) => {
//     // 선택한 라디오 버튼의 값을 업데이트합니다.
//     const updatedStyle = { ...style };

//     if (category === 'background') {
//       updatedStyle.background[event.target.value] =
//         event.target.value === 'imageUrl'
//           ? event.target.value === '이미지'
//             ? ''
//             : null
//           : event.target.value;
//     } else if (category === 'block') {
//       if (event.target.name === 'style') {
//         updatedStyle.block.style = event.target.value;
//       } else if (event.target.name === 'shape') {
//         updatedStyle.block.shape = event.target.value;
//       } else if (event.target.name === 'gradation') {
//         updatedStyle.block.gradation = event.target.value === '스타일색상1';
//       }
//     } else if (category === 'theme') {
//       updatedStyle.theme = event.target.value;
//     }

//     setStyle(updatedStyle);
//   };

//   const handleApplyCustomization = () => {
//     console.log('선택된 스타일 옵션:', style);
//     // 선택된 스타일 옵션을 여기서 활용하거나 필요한 대로 처리합니다.
//     handleOk(); // 원래의 확인 핸들러를 호출합니다.
//   };

//   return (
//     <Modal
//       title="Modal 제목"
//       open={isModalOpen}
//       onOk={handleApplyCustomization}
//       onCancel={handleCancel}
//     >
//       <label>배경</label>
//       <div className="radio-group">
//         <label>
//           <input
//             type="radio"
//             value="color"
//             checked={!style.background.gradation && !style.background.imageUrl}
//             onChange={(e) => handleRadioChange(e, 'background')}
//           />
//           단색
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="gradation"
//             checked={style.background.gradation}
//             onChange={(e) => handleRadioChange(e, 'background')}
//           />
//           그라데이션
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="imageUrl"
//             checked={style.background.imageUrl !== null}
//             onChange={(e) => handleRadioChange(e, 'background')}
//           />
//           이미지
//         </label>
//       </div>

//       <div className="block-options">
//         <label>블록</label>
//         <div className="horizontal-layout">
//           <div className="vertical-layout">
//             <label>모양</label>
//             <div className="radio-group">
//               <label>
//                 <input
//                   type="radio"
//                   name="shape"
//                   value="0px"
//                   checked={style.block.shape === '0px'}
//                   onChange={(e) => handleRadioChange(e, 'block')}
//                 />
//                 모양 1
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="shape"
//                   value="7px"
//                   checked={style.block.shape === '7px'}
//                   onChange={(e) => handleRadioChange(e, 'block')}
//                 />
//                 모양 2
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="shape"
//                   value="14px"
//                   checked={style.block.shape === '14px'}
//                   onChange={(e) => handleRadioChange(e, 'block')}
//                 />
//                 모양 3
//               </label>
//             </div>
//           </div>

//           <div className="vertical-layout">
//             <label>스타일</label>
//             <div className="radio-group">
//               <label>
//                 <input
//                   type="radio"
//                   name="style"
//                   value="dark"
//                   checked={style.block.style === 'dark'}
//                   onChange={(e) => handleRadioChange(e, 'block')}
//                 />
//                 스타일 1
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="style"
//                   value="shadow"
//                   checked={style.block.style === 'shadow'}
//                   onChange={(e) => handleRadioChange(e, 'block')}
//                 />
//                 스타일 2
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="style"
//                   value="flat"
//                   checked={style.block.style === 'flat'}
//                   onChange={(e) => handleRadioChange(e, 'block')}
//                 />
//                 스타일 3
//               </label>
//             </div>
//           </div>

//           <div className="vertical-layout">
//             <label>스타일 색상</label>
//             <div className="radio-group">
//               <label>
//                 <input
//                   type="radio"
//                   name="gradation"
//                   value="스타일색상1"
//                   checked={style.block.gradation}
//                   onChange={(e) => handleRadioChange(e, 'block')}
//                 />
//                 스타일 색상 1
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gradation"
//                   value="스타일색상2"
//                   checked={style.block.gradation}
//                   onChange={(e) => handleRadioChange(e, 'block')}
//                 />
//                 스타일 색상 2
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gradation"
//                   value="스타일색상3"
//                   checked={style.block.gradation}
//                   onChange={(e) => handleRadioChange(e, 'block')}
//                 />
//                 스타일 색상 3
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>

//       <label>테마</label>
//       <div className="radio-group">
//         <label>
//           <input
//             type="radio"
//             value="modern"
//             checked={style.theme === 'modern'}
//             onChange={(e) => handleRadioChange(e, 'theme')}
//           />
//           테마 1
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="classic"
//             checked={style.theme === 'classic'}
//             onChange={(e) => handleRadioChange(e, 'theme')}
//           />
//           테마 2
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="simple"
//             checked={style.theme === 'simple'}
//             onChange={(e) => handleRadioChange(e, 'theme')}
//           />
//           테마 3
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="dark"
//             checked={style.theme === 'dark'}
//             onChange={(e) => handleRadioChange(e, 'theme')}
//           />
//           테마 4
//         </label>
//       </div>
//     </Modal>
//   );
// }
