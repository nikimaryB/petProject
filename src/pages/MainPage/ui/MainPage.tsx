import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const { t, i18n } = useTranslation('main');
  
  return (
    <div>{t('Главная страница')}</div>
  )
}
