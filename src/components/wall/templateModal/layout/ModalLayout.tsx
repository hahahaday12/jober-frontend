import { useCallback, useState } from 'react';
import { Button, Modal, Select, Input } from 'antd';
import styled from 'styled-components';
import {
  BestTemplate,
  CategoryTemplate,
  SelecteSearchTemplate,
} from 'components/index';
import { ModalHeader } from '@/components/common/ModalHeader';

export const ModalOpen = () => {
  const { Search } = Input;

  // modal contents 를 관리하는 state, type 생성
  const [procedure, setProcedure] = useState<
    'recommand' | 'category' | 'search'
  >('recommand');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputText, setInputText] = useState('');
  //const [keyword, setKeyword] = useState<string>('');

  // 키값에 맞는 컴포넌트 객체 생성
  const PROCEDURE_MAPPER = {
    recommand: <BestTemplate />,
    category: <CategoryTemplate />,
    search: <SelecteSearchTemplate inputText={inputText} />,
  };

  // 모달창을 보여주는 함수
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSearchFocus = () => {
    setProcedure('category');
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setInputText('');
    setProcedure('recommand');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setInputText('');
    setProcedure('recommand');
  };

  const handleChangeText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
      if (e.target.value.length > 0) {
        setProcedure('search');
      } else {
        setProcedure('category');
      }
    },
    [],
  );

  return (
    <>
      {/* <Button className="buttonOpen" type="primary" onClick={showModal}>
        템플릿 생성
      </Button> */}
      <Modals
        centered
        title={
          <ModalHeader
            title="템플릿 선택하기"
            handleOk={handleOk}
            handleCloseModal={handleCancel}
          />
        }
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={null}
      >
        <SettingTemplet>
          <p className="settingtText">템플릿 설정하기</p>
          <SelectBox>
            <InputBox>
              <Select
                className="selectbox"
                defaultValue="문서제목"
                allowClear
                options={[{ value: '문서', label: '문서제목' }]}
              />
              <Search
                className="searchBox"
                type="text"
                placeholder="input search text"
                onFocus={handleSearchFocus}
                value={inputText}
                onChange={(e) => handleChangeText(e)}
              />
            </InputBox>
            {PROCEDURE_MAPPER[procedure]}
          </SelectBox>
        </SettingTemplet>
      </Modals>
    </>
  );
};

const Modals = styled(Modal)`
  .ant-modal-content {
    width: 660px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 106px;
  }

  .ant-btn.css-dev-only-do-not-override-12nk7v7.ant-btn-default {
    position: absolute;
    top: 40px;
    left: 40px;
    border: 1px solid red;
    color: red;
  }

  .ant-btn.css-dev-only-do-not-override-12nk7v7.ant-btn-primary {
    position: absolute;
    right: 40px;
    top: 40px;
  }
`;

const ModalHeaders = styled.div`
  max-width: 600px;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
  display: flex;

  p {
    width: 112px;
    margin: auto;
    font-weight: 800;
  }
`;
const SettingTemplet = styled(ModalHeaders)`
  height: 600px;
  border: none;
  background-color: aliceblue;
  position: relative;

  .settingtText {
    width: 112px;
    margin: auto;
    margin-top: 10px;
    font-weight: 800;
    color: blue;
    position: absolute;
  }
`;
const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 30px;
  padding-bottom: 100px;
`;
const InputBox = styled.div`
  width: 570px;
  display: flex;
  gap: 10px;
  margin-top: 20px;

  .ant-btn-icon-only.ant-input-search-button.ant-input-search-button {
    position: absolute;
    top: 0px;
    left: 1px;
    border: 1px solid gray;
  }
`;
