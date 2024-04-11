local timer = GetGameTimer()

-- Variable to check if native has already been run
local Ran = false
local Ready = false

RegisterNUICallback("loadingscreen-ready",function(data, cb)
    Ready = true
end)

-- Wait until client is loaded into the map
AddEventHandler("esx:onPlayerSpawned", function ()
    while not Ran do
        Citizen.Wait(0)
        -- wait 5 seconds before starting the switch to the player
        if Ready then
            ShutdownLoadingScreenNui()
            Ran = true
            Ready = false
        end
    end
end)