import Navigation from './components/Navigation.tsx';
import SendCard from './components/SendCard';
import RetrieveCard from './components/RetrieveCard';
import Footer from './components/Footer';


export default function Home() {
	return (
		<>
			< Navigation />
			< SendCard />
			< RetrieveCard />
			<Footer
			/>
		</>
	);
}
