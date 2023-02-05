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

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user
    }
}