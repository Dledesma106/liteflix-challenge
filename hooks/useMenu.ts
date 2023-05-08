import { useState } from 'react'

interface Menu {
    toggle: () => void
    show: boolean
}

const useMenu = (): Menu => {
    const [show, setShow] = useState<boolean>(false)

	const toggle = (): void => {
		setShow(!show)
	}

    return { toggle, show }
}

export default useMenu
