{ pkgs }: {
	deps = [
		pkgs.xdg_utils
  pkgs.sudo
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}