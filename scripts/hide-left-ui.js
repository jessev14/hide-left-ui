const moduleID = 'hide-left-ui';


Hooks.once('init', () => {
    game.settings.register(moduleID, 'newLogo', {
        name: 'Select New Logo',
        hint: 'Leave empty to use FoundryVTT logo.',
        scope: 'world',
        config: true,
        type: String,
        filePicker: true,
        requiresReload: true
    });
});

Hooks.once('ready', () => {
    const logo = document.getElementById('logo');
    const newLogo = game.settings.get(moduleID, 'newLogo');
    if (newLogo) logo.src = newLogo;

    const r = document.querySelector(':root');
    r.style.setProperty('--hide-left', game.user.isGM ? 'visible' : 'hidden');
});
