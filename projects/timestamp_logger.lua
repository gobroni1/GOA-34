local obs = obslua
local output_file = "C:/Users/Gobron Tsitlauri/Desktop/time_stamps.txt"

function write_timestamp(pressed)
    if pressed then
        local file = io.open(output_file, "a")
        file:write("Timestamp: " .. os.date("%Y-%m-%d %H:%M:%S") .. "\n")
        file:close()
        obs.script_log(obs.LOG_INFO, "Timestamp logged!")
    end
end

function script_description()
    return "Logs a timestamp when a hotkey is pressed."
end

local hotkey_id = obs.OBS_INVALID_HOTKEY_ID

function script_load(settings)
    hotkey_id = obs.obs_hotkey_register_frontend("timestamp_hotkey", "Save Timestamp", write_timestamp)
end
