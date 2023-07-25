'use client';
import React from 'react';
import {Image, Link} from '@chakra-ui/react';
import {FooterLinksProps} from '#/globalTypes';
import {FaPhone, FaRss} from 'react-icons/fa';
import {GrFacebook, GrInstagram, GrTwitter, GrYoutube} from 'react-icons/gr';
import {MdEmail} from 'react-icons/md';

interface FooterProps {
  footerLinks: FooterLinksProps[];
}

export default function Footer(props: FooterProps) {
  const {footerLinks} = props;
  return (
    <section className={'w-full bg-footerDarkGrey h-auto'}>
      <div
        className={
          'w-full flex flex-row justify-between px-48 py-10 text-bgLightGrey'
        }
      >
        <div className={'w-1/4 flex flex-row justify-between'}>
          <div>
            <h4 className={'font-medium text-xl mb-2'}>Contact</h4>

            <div className={'w-full'}>
              <div className={'flex flex-row mb-4'}>
                <FaPhone color={'#a3a3a3'} size={20} className={'mr-6'} />
                <div>
                  <p className={'text-sm'}>1.800.429.3553</p>
                  <p className={'text-sm'}>9am - 8pm EST</p>
                  <p className={'text-sm'}>Everyday</p>
                </div>
              </div>
              <div className={'w-3/4 flex flex-row'}>
                <MdEmail color={'#a3a3a3'} size={28} className={'mr-2'} />
                <Link
                  href={'https://www.gazelle.com/contact'}
                  className={'text-sm ml-2'}
                >
                  Email Us.
                </Link>
              </div>
            </div>
          </div>
          <div className={'w-px h-60 bg-bgDarkGrey'}></div>
        </div>
        <div className={'w-1/2 flex flex-row justify-between'}>
          <div className={'px-6'}>
            <h4 className={'font-medium text-xl mb-2'}>Connect with us</h4>
            <div className="w-full flex flex-row">
              <input
                type="email"
                className={
                  'focus:border-2 focus:border-primary w-3/4 rounded-l-lg h-14 pl-3'
                }
                placeholder={'Email signup for Special Offers'}
              />
              <button
                className={
                  'w-1/4 text-white bg-primary hover:bg-hoverPrimary focus:outline-none focus:ring-white rounded-r-lg px-5 py-2.5 text-center h-14'
                }
              >
                Subscribe
              </button>
            </div>
            <p className={'text-sm mt-2'}>
              By clicking &quot;Subscribe&quot;, you agree to receive our
              newsletter about our website, special offers and promos. You can
              opt-out at any time.{' '}
              <Link
                href={'https://buy.gazelle.com/pages/privacy-policy'}
                className={'text-primary'}
              >
                Privacy Policy
              </Link>
            </p>
            <div
              className={
                'mt-8 w-full flex flex-row items-center justify-between'
              }
            >
              <Link
                href={'https://www.facebook.com/Gazelle.com'}
                className={'w-1/5 flex flex-col'}
              >
                <GrFacebook color={'#fff'} size={36} />
                <p className={'text-sm mt-2'}> Facebook</p>
              </Link>
              <Link
                href={'https://www.instagram.com/gazelle_com/'}
                className={'w-1/5 flex flex-col'}
              >
                <GrInstagram color={'#fff'} size={36} />
                <p className={'text-sm mt-2'}> Instagram</p>
              </Link>
              <Link
                href={'https://twitter.com/gazelle'}
                className={'w-1/5 flex flex-col'}
              >
                <GrTwitter color={'#fff'} size={36} />
                <p className={'text-sm mt-2'}> Twitter</p>
              </Link>
              <Link
                href={'https://www.youtube.com/user/GoGazelle'}
                className={'w-1/5 flex flex-col'}
              >
                <GrYoutube color={'#fff'} size={36} />
                <p className={'text-sm mt-2'}> YouTube</p>
              </Link>
              <Link
                href={'https://www.ecoatm.com/?redirected-from=gazelle.com/'}
                className={'w-1/5 flex flex-col'}
              >
                <FaRss color={'#fff'} size={36} />
                <p className={'text-sm mt-2'}> Blog</p>
              </Link>
            </div>
            <div
              className={
                'mt-8 w-full flex flex-row items-center justify-between'
              }
            >
              <Image
                src={
                  'https://cdn.shopify.com/s/files/1/0008/9296/0821/files/icoVisa_medium.png?v=1662594616'
                }
                alt={'Visa'}
              />
              <Image
                src={
                  'https://cdn.shopify.com/s/files/1/0008/9296/0821/files/icoMastercard_83a562e3-e5a6-48a9-9254-366b93c9a5c0_medium.png?v=1662594616'
                }
                alt={'Mastercard'}
              />
              <Image
                src={
                  'https://cdn.shopify.com/s/files/1/0008/9296/0821/files/icoAmex_medium.png?v=1662594615'
                }
                alt={'American Express'}
              />
              <Image
                src={
                  'https://cdn.shopify.com/s/files/1/0008/9296/0821/files/icoDiscover_medium.png?v=1662594616'
                }
                alt={'Discover'}
              />
              <Image
                src={
                  'https://cdn.shopify.com/s/files/1/0008/9296/0821/files/icoPayPal_medium.png?v=1662594616'
                }
                alt={'Paypal'}
              />
              <Image
                src={
                  'https://cdn.shopify.com/s/files/1/0008/9296/0821/files/icoKatapult_medium.png?v=1662594618'
                }
                alt={'Katapult'}
              />
              <Image
                src={
                  'https://cdn.shopify.com/s/files/1/0008/9296/0821/files/icoAffirm_medium.png?v=1662594616'
                }
                alt={'Affirm'}
              />
            </div>
          </div>
          <div className={'w-px h-60 bg-bgDarkGrey'}></div>
        </div>
        <div className={'w-1/4 flex flex-col items-start pl-2'}>
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={'font-medium text-lg mb-1'}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
