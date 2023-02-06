const tg = window.Telegram.WebApp;
import MainButton from '../components/Buttons/MainButton/MainButton';
import { useNavigate } from "react-router-dom";

export function useTelegram() {
    const navigate = useNavigate();
    //Кнопка закрытия приложения
    const onClose = () => {
        tg.close();
      };

      const onToggleButton = () => {
        
            tg.MainButton.show()
            tg.MainButton.onClick(navigate('/signin'))
      }

      const backButton = () => {
    
            tg.BackButton.show()
            tg.onClick(tg.close())
      }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        backButton
    }
}