export const useContactData = () => {
    const contactMethods = [
        {
            type: 'email' as const,
            label: 'Email',
            value: 'robmatthewn@gmail.com',
            link: 'mailto:robmatthewn@gmail.com',
        },
        {
            type: 'linkedin' as const,
            label: 'LinkedIn',
            value: 'Rob Norris',
            link: 'https://www.linkedin.com/in/rob-norris-bb98601bb/',
        },
        {
            type: 'github' as const,
            label: 'GitHub',
            value: 'robnorris1',
            link: 'https://github.com/robnorris1',
        },
    ];

    return { contactMethods };
};
