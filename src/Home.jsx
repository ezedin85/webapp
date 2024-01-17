const tele = window.Telegram.WebApp;

tele.MainButton.show()
tele.MainButton.onClick(()=>tele.showAlert("Hello from Clizle"))
function Home() {
  return (
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolorum, voluptas adipisci pariatur eos modi earum! Molestiae beatae laudantium consequatur!
    </div>
  )
}

export default Home;
