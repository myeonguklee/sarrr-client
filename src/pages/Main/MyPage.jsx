import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import SubFrame from "../../components/SubFrame";
import { useMypageStore, useUpdateStore } from "../../store/useMypageStore";
import Header from "../../components/My_page/Header";
import Profile from "../../components/My_page/Profile";
import History from "../../components/My_page/History";
import Introduction from "../../components/My_page/Introduction";
import MemoryBox from "../../components/My_page/MemoryBox";
import { FormProvider, useForm } from "react-hook-form";
import Spinner from "../../components/Spinner";
import useAuthStore from "../../store/useAuthStore";
import bgImage from "../../assets/bg/bgImage.jpg";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const { isLogin, setProfileImageUrl } = useAuthStore();
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  // 로그인 여부 확인
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
      return;
    }
  }, [isLogin, navigate]);

  // useMypageStore 훅을 사용하여 상태와 메소드 가져오기
  const {
    memberName,
    memberProviderEmail,
    memberProfileImageUrl,
    memberIntroduction,
    memberHistoryList,
    memberMemoryboxList,
    fetchData,
    updateData,
  } = useMypageStore();

  // useForm 훅을 사용하여 폼 데이터를 다루기 위한 메소드 가져오기
  const methods = useForm({
    // 폼 데이터 초기값 설정
    defaultValues: {
      memberName: memberName || "",
      memberProviderEmail: memberProviderEmail || "",
      memberProfileImageUrl: memberProfileImageUrl || "",
      memberIntroduction: memberIntroduction || "",
      memberHistoryList: memberHistoryList || [],
      memberMemoryboxList: memberMemoryboxList || [],
      deletedHistoryList: [],
    },
  });

  // 수정 모드 상태와 수정 모드 변경
  const { isEditMode, setEditMode } = useUpdateStore();

  // 폼 데이터 초기화 메소드
  const methodReset = () => {
    methods.reset({
      memberName,
      memberProviderEmail,
      memberProfileImageUrl,
      memberIntroduction,
      memberHistoryList,
      memberMemoryboxList,
      deletedHistoryList: [],
    });
  };

  // 수정 모드 변경 메소드
  const handleEditMode = async () => {
    setIsLoading(true);
    await methodReset();
    await setEditMode();
    setIsLoading(false);
  };

  // 마이페이지 데이터 불러오기
  useEffect(() => {
    if (!isLogin) {
      return;
    }
    const loadData = async () => {
      setIsLoading(true);
      await fetchData("/member/mypage");
      methodReset();
      setIsLoading(false);
    };

    loadData();
  }, [fetchData]);

  // 마이페이지 데이터 수정 요청
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await updateData("/member/mypage", data);
      await fetchData("/member/mypage");
      setProfileImageUrl(memberProfileImageUrl);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setEditMode(false);
    }
  };

  // 로딩 중일 때 스피너 표시
  if (isLoading) {
    return <Spinner />; // 로딩 중일 때 표시할 컴포넌트
  }

  return (
    // FormProvider로 폼 데이터 제공
    <FormProvider {...methods}>
      <div
        className="h-screen overflow-y-scroll flex justify-center items-center bg-fixed bg-cover bg-center scrollbar-hide"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <SubFrame>
          <div className="flex flex-col items-center w-[80%] py-10 gap-5">
            <NavBar />
            <Header
              // 수정 모드 상태 전달
              isEditMode={isEditMode}
              // 수정 모드 변경 함수 호출
              handleEditMode={handleEditMode}
              // 폼 제출시 onSubmit 함수 호출
              onSubmit={methods.handleSubmit(onSubmit)}
            />
            <form className="w-full flex flex-col items-center gap-5">
              <div className="w-full flex gap-5">
                <Profile isEditMode={isEditMode} />
                <History isEditMode={isEditMode} />
              </div>
              <div className="w-full flex gap-5">
                <Introduction isEditMode={isEditMode} />
              </div>
              <div className="w-full flex">
                <MemoryBox />
              </div>
            </form>
          </div>
        </SubFrame>
      </div>
    </FormProvider>
  );
};

export default MyPage;
