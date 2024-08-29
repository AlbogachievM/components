import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import s from './styles.module.scss';
import {Icon} from "../icon/icon.tsx";
import {Fragment} from "react";


interface Trigger {
    img?: string
    icon?: 'more'
}

interface BaseItemSetting {
    title: string
    icon: 'logOut' | 'more' | 'profile'
    disabled?: boolean
}

interface LinkItemSetting extends BaseItemSetting {
    href: string; // Обязательный href для ссылок
    onClick?: never; // Не может быть onClick для ссылок
}

interface ButtonItemSetting extends BaseItemSetting {
    onClick: () => void; // Обязательный onClick для кнопок
    href?: never; // Не может быть href для кнопок
}

type ItemSetting = LinkItemSetting | ButtonItemSetting;


interface Profile {
    userName: string
    email?: string
    img?: string
    onClick?: () => void
}

type BaseProps = {
    isArrow?: boolean
    trigger: Trigger;
    items: ItemSetting[]
}

type Props = (BaseProps & { mode: 'profile', profile: Profile }) | (BaseProps & { mode: 'default' })

export const DropDownMenu = (props: Props) => {
    const {mode, trigger, isArrow, items} = props

    const itemList = items.map((el, i) => {
        const ItemComponent = el.href ? 'a' : 'button';
        const itemProps = el.href
            ? {href: el.href || '#', className: s.link}
            : {onClick: el.onClick, className: s.button};

        return (
            <Fragment key={i}>
                <DropdownMenu.Item className={s.Item} asChild>
                    <ItemComponent {...itemProps}>
                        <Icon iconId={el.icon}/>
                        <span>{el.title}</span>
                    </ItemComponent>
                </DropdownMenu.Item>
                {i < items.length - 1 && <DropdownMenu.Separator className={s.Separator}/>}
            </Fragment>
        );
    });

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={s.triggerButton} aria-label="Customise options">
                    {trigger.icon && <Icon iconId={trigger.icon}/>}
                    {trigger.img && <img src={trigger.img} alt={trigger.img}/>}
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className={s.Content} sideOffset={5}>
                    {!isArrow && <DropdownMenu.Arrow className={s.Arrow}/>}
                    {mode === 'profile' &&
                        <>
                            <DropdownMenu.Item className={s.Item}>
                                <div className={s.profile}>
                                    <img src={props.profile.img} alt={props.profile.img}/>
                                    <div>
                                        <span className={s.userName}>{props.profile.userName}</span>
                                        <span className={s.userEmail}>{props.profile.email}</span>
                                    </div>
                                </div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator className={s.Separator}/>
                            {itemList}
                        </>
                    }
                    {mode === 'default' && <> {itemList}</>}

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
