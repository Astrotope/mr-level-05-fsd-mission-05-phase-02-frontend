import { ReactNode } from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
 
      <Container 
        maxWidth="xxl" 
        direction="column"
        alignItems="center"
        justifyContent="start"
        wrap="wrap"
        padding="none"
        className={styles.layout}
      >

        <header className={styles.header}>
          <Container as="div" className={styles.header_01} maxWidth="lg" padding="none">

            <Container as="div" className={styles.header_01_left} alignItems="center" justifyContent="start" gap="md">

              <Icon 
                icon="logo" 
                width={54} 
                height={54} 
                className={styles.logo}
              />

              <Container as="div" alignItems="center" gap="md">
                <Button variant="z-energy-variant-02" size="small">For personal</Button>
                <Button variant="z-energy-variant-03" size="small">For business</Button>
              </Container>

            </Container>

            <Container as="div" className={styles.header_01_right} alignItems="center" justifyContent="end" gap="md">

              <Container as="div" alignItems="center" gap="md">
                <Button variant="nav" size="small">Z App</Button>
                <Button variant="nav" size="small">About Z</Button>
              </Container>

              <Icon 
                icon="search" 
                width={16} 
                height={16} 
                className={styles.logo}
              />
              <Button variant="z-energy-variant-04" size="small">Login
                <span className="button__circle" aria-hidden="true">
                  <span className="button__arrow button__arrow--first">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group">
                    <path id="Vector" d="M1.00001 6.43481L12.6667 6.43481" stroke="#EE5C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_2" d="M8.33333 11.4059L13 6.43488L8.33333 1.46387" stroke="#EE5C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                  </span>
                </span>
              </Button>

            </Container>

          </Container>

          <Container as="div" className={styles.header_02} maxWidth="lg" padding="none">
            <Container as="div" className={styles.header_02_left} alignItems="center" justifyContent="start" gap="md">

              <Container as="div" alignItems="center" gap="sm">
                <Button variant="nav" size="small">At the station</Button>
                <svg width="11" height="8.03" fill="none" viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 1.0644C0.512563 0.771503 0.987437 0.771503 1.28033 1.0644L5.25 5.03407L9.21967 1.0644C9.51256 0.771503 9.98744 0.771503 10.2803 1.0644C10.5732 1.35729 10.5732 1.83216 10.2803 2.12506L5.25 7.15539L0.21967 2.12506C-0.0732233 1.83216 -0.0732233 1.35729 0.21967 1.0644Z" fill="currentColor">
                  </path>
                </svg>
                <Button variant="nav" size="small">Power</Button>
                <svg width="11" height="8.03" fill="none" viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 1.0644C0.512563 0.771503 0.987437 0.771503 1.28033 1.0644L5.25 5.03407L9.21967 1.0644C9.51256 0.771503 9.98744 0.771503 10.2803 1.0644C10.5732 1.35729 10.5732 1.83216 10.2803 2.12506L5.25 7.15539L0.21967 2.12506C-0.0732233 1.83216 -0.0732233 1.35729 0.21967 1.0644Z" fill="currentColor">
                  </path>
                </svg>
                <Button variant="nav" size="small">Rewards and promotions</Button>
                <svg width="11" height="8.03" fill="none" viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 1.0644C0.512563 0.771503 0.987437 0.771503 1.28033 1.0644L5.25 5.03407L9.21967 1.0644C9.51256 0.771503 9.98744 0.771503 10.2803 1.0644C10.5732 1.35729 10.5732 1.83216 10.2803 2.12506L5.25 7.15539L0.21967 2.12506C-0.0732233 1.83216 -0.0732233 1.35729 0.21967 1.0644Z" fill="currentColor">
                  </path>
                </svg>
              </Container>
            </Container>
            <Container as="div" className={styles.header_02_right} alignItems="center" justifyContent="end" gap="md">
              <Container as="div" alignItems="center" gap="md">
                <Button variant="z-energy-variant-04" size="small">Locate Z
                  <span className="button__circle" aria-hidden="true">
                    <span className="button__arrow button__arrow--first">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Group">
                      <path id="Vector" d="M1.00001 6.43481L12.6667 6.43481" stroke="#EE5C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path id="Vector_2" d="M8.33333 11.4059L13 6.43488L8.33333 1.46387" stroke="#EE5C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      </svg>
                    </span>
                  </span>
                </Button>
              </Container>
            </Container>
          </Container>
          
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <Container as="div" className={styles.footer_content} maxWidth="lg" padding="none" justifyContent="between">
            <Container as="div" className={styles.header_01_left} alignItems="start" justifyContent="between" gap="md">
              <Container as="div" alignItems="center" justifyContent="start" gap="md">
              <Icon 
                icon="logo" 
                width={54} 
                height={54} 
                className={styles.logo}
              />
              </Container>

              <Container as="div" className={styles.footer_menu}alignItems="start" justifyContent="center" gap="md">
                <Container as="div" direction="column" alignItems="start" justifyContent="center" gap="sm">
                  <h1>Products and Services</h1>
                  <a target="_blank" rel="noopener noreferrer">At the station</a>
                  <a target="_blank" rel="noopener noreferrer">Z App</a>
                  <a target="_blank" rel="noopener noreferrer">Rewards and promotions</a>
                </Container>
                <Container as="div" direction="column" alignItems="start" justifyContent="center" gap="sm">
                  <h1>For businesses</h1>
                  <a target="_blank" rel="noopener noreferrer">Z Business fuel card</a>
                  <a target="_blank" rel="noopener noreferrer">Fuels and services</a>
                  <a target="_blank" rel="noopener noreferrer">Business tips and stories</a>
                </Container>
                <Container as="div" direction="column" alignItems="start" justifyContent="center" gap="sm">
                  <h1>About Z</h1>
                  <a target="_blank" rel="noopener noreferrer">Our story</a>
                  <a target="_blank" rel="noopener noreferrer">Our people</a>
                  <a target="_blank" rel="noopener noreferrer">What we stand for</a>
                  <a target="_blank" rel="noopener noreferrer">Sustainability</a>
                  <a target="_blank" rel="noopener noreferrer">News</a>
                  <a target="_blank" rel="noopener noreferrer">Careers at Z</a>
                  <a target="_blank" rel="noopener noreferrer">Corporate centre</a>
                </Container>
              </Container>

              <Container as="div" alignItems="center" justifyContent="center" direction="column" gap="md" wrap="wrap" padding="none">
                <Container as="div" alignItems="center" justifyContent="center" gap="md">
                  <Button variant="z-energy-variant-06" size="small">Contact us
                    <span className="button__circle" aria-hidden="true">
                      <span className="button__arrow button__arrow--first">
                      <svg width="13" height="17" viewBox="0 0 13 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 16.125C4.125 14.0938 0.5 9.25 0.5 6.5C0.5 3.1875 3.15625 0.5 6.5 0.5C9.8125 0.5 12.5 3.1875 12.5 6.5C12.5 9.25 8.84375 14.0938 7.21875 16.125C6.84375 16.5938 6.125 16.5938 5.75 16.125ZM6.5 8.5C7.59375 8.5 8.5 7.625 8.5 6.5C8.5 5.40625 7.59375 4.5 6.5 4.5C5.375 4.5 4.5 5.40625 4.5 6.5C4.5 7.625 5.375 8.5 6.5 8.5Z" fill="currentColor"></path></svg>
                      </span>
                    </span>
                  </Button>
                </Container>
                <Container as="div" alignItems="center" justifyContent="center" gap="md">
                  <Button variant="social-icon" size="small">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#ED560E" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM16.5634 15.6589V23.8197H13.1869V15.6592H11.5V12.8469H13.1869V11.1585C13.1869 8.86425 14.1394 7.5 16.8457 7.5H19.0988V10.3126H17.6905C16.637 10.3126 16.5673 10.7056 16.5673 11.4391L16.5634 12.8466H19.1147L18.8162 15.6589H16.5634Z"></path></svg>
                  </Button>
                  <Button variant="social-icon" size="small">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM11.7021 7.04826C12.5554 7.00943 12.8281 6.99993 15.0008 6.99993H14.9983C17.1716 6.99993 17.4433 7.00943 18.2966 7.04826C19.1483 7.08726 19.73 7.2221 20.24 7.41993C20.7667 7.6241 21.2117 7.89744 21.6567 8.34244C22.1017 8.78711 22.375 9.23345 22.58 9.75962C22.7767 10.2683 22.9117 10.8496 22.9517 11.7013C22.99 12.5547 23 12.8273 23 15C23 17.1727 22.99 17.4447 22.9517 18.298C22.9117 19.1494 22.7767 19.7309 22.58 20.2397C22.375 20.7657 22.1017 21.2121 21.6567 21.6567C21.2122 22.1017 20.7665 22.3758 20.2405 22.5801C19.7315 22.7779 19.1495 22.9128 18.2978 22.9518C17.4445 22.9906 17.1726 23.0001 14.9998 23.0001C12.8272 23.0001 12.5547 22.9906 11.7014 22.9518C10.8499 22.9128 10.2684 22.7779 9.75938 22.5801C9.23354 22.3758 8.7872 22.1017 8.3427 21.6567C7.89786 21.2121 7.62452 20.7657 7.42002 20.2396C7.22235 19.7309 7.08752 19.1496 7.04835 18.2979C7.00969 17.4445 7.00002 17.1727 7.00002 15C7.00002 12.8273 7.01002 12.5545 7.04819 11.7011C7.08652 10.8498 7.22152 10.2683 7.41986 9.75946C7.62486 9.23345 7.89819 8.78711 8.3432 8.34244C8.78787 7.8976 9.23421 7.62427 9.76038 7.41993C10.2691 7.2221 10.8504 7.08726 11.7021 7.04826Z" fill="#ED560E"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.2831 8.44182C14.4225 8.4416 14.5724 8.44167 14.7341 8.44174L15.0008 8.44182C17.1368 8.44182 17.39 8.44949 18.2335 8.48782C19.0135 8.52349 19.4368 8.65382 19.7188 8.76332C20.0922 8.90832 20.3583 9.08166 20.6382 9.36166C20.9182 9.64167 21.0915 9.90833 21.2368 10.2817C21.3463 10.5633 21.4769 10.9867 21.5124 11.7667C21.5507 12.61 21.559 12.8634 21.559 14.9984C21.559 17.1334 21.5507 17.3867 21.5124 18.2301C21.4767 19.0101 21.3463 19.4334 21.2368 19.7151C21.0918 20.0884 20.9182 20.3543 20.6382 20.6341C20.3582 20.9141 20.0923 21.0875 19.7188 21.2325C19.4372 21.3425 19.0135 21.4725 18.2335 21.5081C17.3901 21.5465 17.1368 21.5548 15.0008 21.5548C12.8646 21.5548 12.6114 21.5465 11.7681 21.5081C10.9881 21.4721 10.5647 21.3418 10.2826 21.2323C9.90923 21.0873 9.64256 20.9139 9.36256 20.6339C9.08256 20.3539 8.90922 20.0879 8.76389 19.7144C8.65439 19.4328 8.52388 19.0094 8.48838 18.2294C8.45005 17.3861 8.44238 17.1327 8.44238 14.9964C8.44238 12.86 8.45005 12.608 8.48838 11.7647C8.52405 10.9847 8.65439 10.5613 8.76389 10.2793C8.90889 9.906 9.08256 9.63933 9.36256 9.35933C9.64256 9.07933 9.90923 8.90599 10.2826 8.76066C10.5646 8.65065 10.9881 8.52065 11.7681 8.48482C12.5061 8.45149 12.7921 8.44149 14.2831 8.43982V8.44182ZM19.2712 9.7702C18.7412 9.7702 18.3111 10.1997 18.3111 10.7299C18.3111 11.2599 18.7412 11.6899 19.2712 11.6899C19.8012 11.6899 20.2312 11.2599 20.2312 10.7299C20.2312 10.1999 19.8012 9.76987 19.2712 9.76987V9.7702ZM10.8924 15.0001C10.8924 12.7313 12.7318 10.8918 15.0006 10.8917C17.2695 10.8917 19.1085 12.7313 19.1085 15.0001C19.1085 17.269 17.2696 19.1077 15.0008 19.1077C12.7319 19.1077 10.8924 17.269 10.8924 15.0001Z" fill="#ED560E"></path><path d="M15.0007 12.3334C16.4734 12.3334 17.6674 13.5272 17.6674 15.0001C17.6674 16.4728 16.4734 17.6668 15.0007 17.6668C13.5278 17.6668 12.334 16.4728 12.334 15.0001C12.334 13.5272 13.5278 12.3334 15.0007 12.3334Z" fill="#ED560E"></path></svg>
                  </Button>
                  <Button variant="social-icon" size="small">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM7.20103 12.4236H10.6004V22.6372H7.20103V12.4236ZM10.8242 9.26419C10.8022 8.26275 10.0861 7.5 8.92316 7.5C7.76027 7.5 7.00002 8.26275 7.00002 9.26419C7.00002 10.2449 7.7378 11.0296 8.87904 11.0296H8.90076C10.0861 11.0296 10.8242 10.2449 10.8242 9.26419ZM18.9457 12.1838C21.1827 12.1838 22.8596 13.6439 22.8596 16.7811L22.8595 22.6372H19.4603V17.173C19.4603 15.8004 18.9684 14.8639 17.7378 14.8639C16.7987 14.8639 16.2393 15.4953 15.9936 16.1051C15.9038 16.3236 15.8817 16.6281 15.8817 16.9334V22.6375H12.482C12.482 22.6375 12.5268 13.3823 12.482 12.4239H15.8817V13.8706C16.3329 13.1751 17.1409 12.1838 18.9457 12.1838Z" fill="#ED560E"></path></svg>
                  </Button>
                </Container>
              </Container>

            </Container>            
          </Container>

          <Container as="div" className={styles.footer_content} maxWidth="lg" padding="none" justifyContent="between">
            <Container as="div" className={styles.footer_01_left} alignItems="center" justifyContent="start" gap="md" >
              <div>Privacy</div>
              <div>Terms of Use</div>
              <div>Fuel Safety Datasheets</div>
              <div>Investor Relations</div>
            </Container>
            <Container as="div" className={styles.footer_01_right} alignItems="center" justifyContent="start" gap="md" wrap ="nowrap">
              <p>© Z Energy Limited. All trademarks are used under license.</p>
              <img alt="shielded" className={styles.footer__shield} id="shielded-logo" src="https://shielded.co.nz/img/custom-logo.png" height="32" width="32"></img>
            </Container>
          </Container>
        </footer>
      
      </Container>

  );
};
