const tg = window.Telegram.WebApp;
import MainButton from '../components/Buttons/MainButton/MainButton';

export function useTelegram() {

    //Кнопка закрытия приложения
    const onClose = () => {
        tg.close();
      };

      const onToggleButton = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
        }
      }

      const backButton = () => {
        if(tg.BackButton.isVisible){
            tg.BackButton.hide()
        }else{
            tg.BackButton.show()
        }
      }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        backButton
    }
}