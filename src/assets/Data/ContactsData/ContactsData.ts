import addressIcon from '../../images/contacts-icon/address.svg'
import emailIcon from '../../images/contacts-icon/email.svg'
import callIcon from '../../images/contacts-icon/call.svg'

export type ContactType = {
    title: string
    body: string
    image: string
}

export const contactsData:ContactType[] = [
    {title: 'ADDRESS POINT', body: 'Russia, Belgorod region, Gubkin city', image: addressIcon},
    {title: 'MAIL ME', body: 'som17son25@gmail.com', image: emailIcon},
    {title: 'CALL ME', body: '8-951-762-50-39', image: callIcon},
]