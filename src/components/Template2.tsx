/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Breadcrumb, Layout, Popconfirm, theme } from 'antd';
import { IoIosNotificationsOutline } from "react-icons/io";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
const { Content, Footer, Header } = Layout;
import { ConfigProvider as ProviderAntd } from "antd";
import { IoExitOutline } from "react-icons/io5";
import { SignOut } from '@/components/Login/SignOut';

interface Template1Props {
  children: React.ReactNode;
}

interface DataPage {
  route: string;
  titleHead: string;
}

export const Template2 = ({ children }: Template1Props) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {token: { colorBgContainer }} = theme.useToken();
  const [tema, setTema] = useState('#7e0c11');

  const returnPhotoProfile = (img) => {
    if(img){
      return img.url
    }
    return '/profile.png';
  }

  const titlePage = [
    {
      route: '/perfil',
      titleHead: 'Perfil'
    },
    {
      route: '/',
      titleHead: 'Início'
    },
    {
      route: '/servicos',
      titleHead: 'Meus Serviços'
    },
    {
      route: '/should-cost',
      titleHead: 'Should Cost'
    },
    {
      route: '/bi',
      titleHead: 'BI'
    },
    {
      route: '/404',
      titleHead: '404'
    },
  ]

  const dataPage: DataPage = titlePage.find((item) => item.route === router.pathname) || { route: '/', titleHead: 'Início' };

  const isHome = router.pathname === '/';
  
  const unauthenticatedUser = router.pathname === '/login' || router.pathname === '/login/recuperarSenha';

  if(unauthenticatedUser){
    return (
      <ProviderAntd theme={{token: {colorPrimary: tema}}}>
        {children}
      </ProviderAntd>
    );
  }

  return (
    <ProviderAntd theme={{token: {colorPrimary: tema}}}>
      <Head>
        <title>{`${dataPage?.titleHead} - TMT Inteligência Logística`}</title>
      </Head>

      <Layout>
        <Header
          style={{
            background: "#f5f5f5",
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            position: 'sticky',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '84px',
          }}
          className='rounded-b-[32px] noSelect'
        >
          <Link href='/'>
            <div className={`md:w-36 flex-shrink-0 w-16 transition-all duration-500 cursor-pointer`}>
              <img
                className="w-full h-full object-cover"
                src={'/logoTmt2.png'}
                alt="logo"
              />
            </div>
          </Link>

          <div className='flex items-center justify-center gap-2 h-[84px]'>
            <div className='h-[72px] cursor-pointer flex justify-center hover:bg-[#fff] p-1 px-2 rounded-md'>
              <Link href="/perfil" className='flex items-center justify-center gap-2 rounded-[8px] w-full mx-[1px]'>
                <div className={`transition-all duration-300 flex items-center justify-center gap-2 rounded-[8px] w-full `}>
                  <div className="relative flex-shrink-0 w-10 h-10 md:w-12 md:h-12">
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-full shadow"
                      src={returnPhotoProfile(null)}
                      alt="foto perfil"
                    />
                  </div>

                  <span className={`text-black font-semibold text-xs md:text-sm`}>José Silva</span>
                </div>
              </Link>
            </div>

            <div className='h-[72px] px-2 flex justify-center items-center cursor-pointer hover:bg-[#fff] flex-1 rounded-md py-3 transition-all duration-300'>
              <IoIosNotificationsOutline size={24} color='#000'/>
            </div>

            <div
              onClick={() => setIsModalOpen(true)}
              className='h-[72px] items-center pl-2 pr-1 flex justify-center cursor-pointer hover:bg-[#fff] flex-1 rounded-md py-3 transition-all duration-300'
            >
              <IoExitOutline size={22} color="#000" />
            </div>

          </div>
        </Header>

        <Layout className={`transition-all duration-300`}>
          <Content style={{ margin: '0 16px' }}>
            <div>
              {!isHome && (
                <Breadcrumb
                  className='font-semibold'
                  items={dataPage?.route === '/' ? [{title: 'Início'}] : [
                    {
                      title: <Link href="/">Início</Link>,
                    },
                    {
                      title: dataPage?.titleHead,
                    },
                  ]}
                  style={{ margin: '16px 0' }}
                />
              )}
            </div>

            <div style={{ padding: 24, minHeight: 360, background: isHome ? '#f5f5f5' : colorBgContainer, marginTop: isHome ? '25px' : '0px' }} className='rounded-lg'>
              {children}
            </div>

            <Footer style={{ textAlign: 'center' }}>©2023 TMT | Inteligência Logística</Footer>
          </Content>
        </Layout>
      </Layout>

      <SignOut
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </ProviderAntd>
  );
};
