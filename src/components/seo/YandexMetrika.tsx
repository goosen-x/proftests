'use client';

import Script from 'next/script';

interface YandexMetrikaProps {
  counterId: string;
  webvisor?: boolean;
  clickmap?: boolean;
  trackLinks?: boolean;
  accurateTrackBounce?: boolean;
  trackHash?: boolean;
  ecommerce?: boolean;
}

export function YandexMetrika({
  counterId,
  webvisor = true,
  clickmap = true,
  trackLinks = true,
  accurateTrackBounce = true,
  trackHash = true,
  ecommerce = false,
}: YandexMetrikaProps) {
  if (!counterId || counterId === 'XXXXXXXXX') {
    console.warn('YandexMetrika: counterId не настроен');
    return null;
  }

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${counterId}, "init", {
            clickmap:${clickmap},
            trackLinks:${trackLinks},
            accurateTrackBounce:${accurateTrackBounce},
            webvisor:${webvisor},
            trackHash:${trackHash},
            ${ecommerce ? 'ecommerce:"dataLayer"' : ''}
          });
        `}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}

// Функции для отслеживания событий
export const ym = (counterId: string, ...args: unknown[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof window !== 'undefined' && (window as any).ym) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).ym(counterId, ...args);
  }
};

// Отслеживание целей
export const trackGoal = (
  counterId: string,
  goalName: string,
  params?: Record<string, unknown>
) => {
  ym(counterId, 'reachGoal', goalName, params);
};

// Отслеживание внешних ссылок
export const trackExtLink = (counterId: string, url: string, title?: string) => {
  ym(counterId, 'extLink', url, { title });
};

// Отслеживание загрузки файлов
export const trackFile = (counterId: string, file: string, title?: string) => {
  ym(counterId, 'file', file, { title });
};

// Отслеживание нажатий
export const trackHit = (counterId: string, url: string, options?: Record<string, unknown>) => {
  ym(counterId, 'hit', url, options);
};

// Параметры посетителя
export const setUserParams = (counterId: string, params: Record<string, unknown>) => {
  ym(counterId, 'userParams', params);
};

// Параметры визита
export const setVisitParams = (counterId: string, params: Record<string, unknown>) => {
  ym(counterId, 'params', params);
};
