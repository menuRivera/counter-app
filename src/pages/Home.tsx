import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {
	const [count, setCount] = useState<number>(0)

	const increment = (mult = 1) => {
		setCount(v => v += (mult * 1))
	}
	const decrement = (mult = 1) => {
		setCount(v => v -= (mult * 1))
	}

	const reset = () => {
		setCount(0)
	}
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Counter</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonGrid>
					<IonRow>
						<strong>{count}</strong>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton onClick={() => decrement()}>-1</IonButton>
						</IonCol>
						<IonCol>
							<IonButton id='reset-button' color='danger'>Reset</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton onClick={() => increment()}>+1</IonButton>
						</IonCol>
						<IonCol>
							<IonButton onClick={() => increment(2)}>+2</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton onClick={() => increment(4)}>+4</IonButton>
						</IonCol>
						<IonCol>
							<IonButton onClick={() => increment(6)}>+6</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

			<IonAlert header='Reset counter?' trigger='reset-button' buttons={
				[
					{
						text: 'Cancel',
						role: 'cancel',
						handler: () => { console.log('cancel') },
					},
					{
						text: 'Reset',
						role: 'confirm',
						handler: () => {
							reset()
						},
					}
				]
			}></IonAlert>
		</IonPage>
	);
};

export default Home;
