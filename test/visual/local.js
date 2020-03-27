
function local(name){
    return 'http://localhost:2345/' + name + '/';
}

['demo', 'hello-world', 'columns'].forEach(item => {
    test(item, async () => {
        await page.goto(local(item));
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    });
});
