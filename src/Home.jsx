const tele = window.Telegram.WebApp;

tele.MainButton.show()
tele.MainButton.onClick(() => tele.showAlert("Hello from Clizle"))
const usersTheme = tele.colorScheme
function Home() {

    const style = usersTheme === 'light' ? { backgroundColor: 'white', color: 'black' } : 
    { backgroundColor: 'black', color: 'white' } 

    return (
        <div style={style}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolorum, voluptas adipisci pariatur eos modi earum! Molestiae beatae laudantium consequatur!
        </div>
    )
}

export default Home;
