const tele = window.Telegram.WebApp;
import { Link } from "react-router-dom";

tele.MainButton.show();
tele.SettingsButton.show();
tele.BackButton.show();
tele.MainButton.setText("ክፈል");
tele.MainButton.showProgress(false);
const startcom = tele.WebAppInitData?.start_param
// tele.MainButton.color = "red";
tele.MainButton.onClick(() => tele.showAlert("Hello rom Clizle"));
const usersTheme = tele.colorScheme;
function Home() {
  const style =
    usersTheme === "light"
      ? { backgroundColor: "white", color: "black" }
      : { backgroundColor: "black", color: "white" };

  return (
    <div style={style}>
      oor st {startcom} 13 consectetur, adipisicing elit
      9 {tele.MainButton?.toString()}
      <Link to="/about">Go Abou</Link>
    </div>
  );
}

export default Home;
