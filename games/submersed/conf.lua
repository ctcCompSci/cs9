-- Configuration
function love.conf(t)
	t.title = "Submersed" -- The title of the window the game is in (string)
	t.version = "0.11.3"         -- The LÖVE version this game was made for (string)
	t.window.width = 576       -- we want our game to be long and thin.
	t.window.height = 1024

	-- For Windows debugging
	t.console = true
end