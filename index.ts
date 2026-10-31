import "frida-il2cpp-bridge";

Il2Cpp.perform(() => {
    try {
        const AmongUsClient = Il2Cpp.domain.assembly("Assembly-CSharp").image.class("AmongUsClient");
        
        AmongUsClient.method("Awake").implementation = function () {
            return this.method("Awake").invoke();
        };
    } catch (e) {
    }
});
