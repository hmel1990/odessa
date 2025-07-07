import { render, screen, fireEvent } from '@testing-library/react' // импорт функций для рендеринга компонентов и взаимодействия с DOM
import App from './App' // импорт компоненты App, которую будем тестировать


describe('App component', () => { // группа тестов для компонента App
    it('renders Vite and React logos', () => { // тест: проверяет, что логотипы Vite и React отображаются
        render(<App />) // рендерим компонент App в виртуальный DOM
        expect(screen.getByAltText('Header Image')).toBeInTheDocument()
    })

    it('renders the main title', () => {
        render(<App />) // рендерим компонент App
        expect(screen.getByText(/Главная/i)).toBeInTheDocument()
        expect(screen.getByText('Архитектура')).toBeInTheDocument()

    })

    it('renders initial counter value', () => {
        render(<App />)
        expect(screen.getByRole('link', { name: 'Главная' })).toBeInTheDocument();
    })

    it('show div Photo on click', () => {
        render(<App />) // рендерим компонент App
        const button = screen.getByRole('link', { name: 'Архитектура' })
        fireEvent.click(button) // симулируем клик по кнопке
        expect(screen.getByRole('link', { name: 'Фото' })).toBeInTheDocument();

    })
})
