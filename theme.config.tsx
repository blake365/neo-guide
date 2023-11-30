import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
	logo: (
		<>
			<svg
				height='40px'
				// strokeMiterLimit='10'
				// style='clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;'
				version='1.1'
				viewBox='0 0 490 490'
				width='40px'
				style={{ marginRight: '6px' }}
				// xml:space='preserve'
				xmlns='http://www.w3.org/2000/svg'
				// xmlns:xlink='http://www.w3.org/1999/xlink'
			>
				<defs />
				<g id='Layer-1'>
					<path
						d='M241.601 12.1046C239.268 16.1046 234.934 20.4376 228.601 25.1046C222.268 29.7716 216.768 32.7716 212.101 34.1046C207.434 35.4376 200.268 35.7716 190.601 35.1046C180.934 34.4376 175.268 34.7716 173.601 36.1046C172.768 36.7716 171.934 37.4376 171.101 38.1046C174.268 40.4376 177.434 42.7716 180.601 45.1046C186.934 49.7716 191.101 53.7716 193.101 57.1046C195.101 60.4376 196.601 63.9376 197.601 67.6046C198.601 71.2716 198.601 76.2716 197.601 82.6046C196.601 88.9376 193.768 94.4376 189.101 99.1046C184.434 103.772 179.934 106.438 175.601 107.105C171.268 107.772 168.101 107.772 166.101 107.105C164.101 106.438 161.934 104.772 159.601 102.105C157.268 99.4376 156.101 96.2716 156.101 92.6046C156.101 88.9376 157.434 85.9376 160.101 83.6046C162.768 81.2716 165.434 80.1046 168.101 80.1046C170.768 80.1046 173.601 81.1046 176.601 83.1046C178.101 84.1046 179.601 85.1046 181.101 86.1046C180.768 83.4376 180.434 80.7716 180.101 78.1046C179.434 72.7716 177.268 68.7716 173.601 66.1046C169.934 63.4376 165.601 62.1046 160.601 62.1046C155.601 62.1046 149.934 63.4376 143.601 66.1046C137.268 68.7716 130.768 72.4376 124.101 77.1046C117.434 81.7716 111.601 86.4376 106.601 91.1046C101.601 95.7716 95.1006 103.272 87.1006 113.605C79.1006 123.938 72.7676 133.605 68.1006 142.605C63.4336 151.605 59.7676 159.938 57.1006 167.605C54.4336 175.272 52.1006 183.772 50.1006 193.105C48.1006 202.438 46.9336 213.938 46.6006 227.605C46.2676 241.272 46.7676 252.438 48.1006 261.105C49.4336 269.772 51.4336 278.605 54.1006 287.605C56.7676 296.605 60.6006 306.272 65.6006 316.605C70.6006 326.938 76.9336 337.272 84.6006 347.605C92.2676 357.938 100.268 366.938 108.601 374.605C116.934 382.272 125.601 388.938 134.601 394.605C143.601 400.272 152.934 404.938 162.601 408.605C172.268 412.272 177.101 418.938 177.101 428.605C177.101 438.272 178.934 443.605 182.601 444.605C186.268 445.605 188.434 446.105 189.101 446.105C189.434 446.105 189.768 446.105 190.101 446.105C190.101 423.272 190.101 400.438 190.101 377.605C190.101 354.772 190.101 331.938 190.101 309.105C188.101 309.105 186.101 309.105 184.101 309.105C182.101 309.105 180.101 309.105 178.101 309.105C178.101 306.938 178.101 304.772 178.101 302.605C178.101 300.438 178.101 298.272 178.101 296.105C180.101 296.105 182.101 296.105 184.101 296.105C186.101 296.105 188.101 296.105 190.101 296.105C190.101 291.938 190.101 287.772 190.101 283.605C190.101 279.438 190.101 275.272 190.101 271.105C189.101 271.105 188.101 271.105 187.101 271.105C186.101 271.105 185.101 271.105 184.101 271.105C184.101 269.605 184.101 268.105 184.101 266.605C184.101 263.605 184.934 261.605 186.601 260.605C188.268 259.605 189.268 257.938 189.601 255.605C189.934 253.272 189.601 251.438 188.601 250.105C187.601 248.772 188.934 242.438 192.601 231.105C196.268 219.772 198.434 214.105 199.101 214.105C199.768 214.105 201.768 219.605 205.101 230.605C208.434 241.605 210.101 247.605 210.101 248.605C210.101 249.605 209.601 250.272 208.601 250.605C207.601 250.938 207.101 252.272 207.101 254.605C207.101 256.938 207.934 258.605 209.601 259.605C211.268 260.605 212.101 262.772 212.101 266.105C212.101 267.772 212.101 269.438 212.101 271.105C211.268 271.105 210.434 271.105 209.601 271.105C208.768 271.105 207.934 271.105 207.101 271.105C207.101 275.105 207.101 279.105 207.101 283.105C207.101 287.105 207.101 291.105 207.101 295.105C209.434 295.105 211.768 295.105 214.101 295.105C216.434 295.105 218.768 295.105 221.101 295.105C220.934 278.105 220.768 261.105 220.601 244.105C220.434 227.105 220.268 210.105 220.101 193.105C218.768 193.105 217.434 193.105 216.101 193.105C214.768 193.105 213.434 193.105 212.101 193.105C212.101 192.438 212.101 191.772 212.101 191.105C212.101 189.772 213.268 185.938 215.601 179.605C217.934 173.272 221.601 165.605 226.601 156.605C231.601 147.605 234.101 138.272 234.101 128.605C234.101 118.938 233.101 113.438 231.101 112.105C229.101 110.772 228.101 108.772 228.101 106.105C228.101 103.438 229.268 101.105 231.601 99.1046C233.934 97.1046 235.101 91.1046 235.101 81.1046C235.101 71.1046 234.268 65.9376 232.601 65.6046C230.934 65.2716 230.101 64.7716 230.101 64.1046C230.101 63.4376 230.601 61.4376 231.601 58.1046C232.601 54.7716 233.768 52.7716 235.101 52.1046C236.434 51.4376 238.434 46.2716 241.101 36.6046C242.434 31.7716 243.768 26.9376 245.101 22.1046C246.601 26.7716 248.101 31.4376 249.601 36.1046C252.601 45.4376 254.934 50.7716 256.601 52.1046C258.268 53.4376 259.434 55.1046 260.101 57.1046C260.768 59.1046 261.101 60.9376 261.101 62.6046C261.101 64.2716 260.101 65.2716 258.101 65.6046C256.101 65.9376 255.101 71.1046 255.101 81.1046C255.101 91.1046 255.934 96.4376 257.601 97.1046C259.268 97.7716 260.601 98.9376 261.601 100.605C262.601 102.272 262.934 104.272 262.601 106.605C262.268 108.938 261.101 110.772 259.101 112.105C257.101 113.438 256.101 118.772 256.101 128.105C256.101 137.438 259.101 147.772 265.101 159.105C271.101 170.438 274.934 178.772 276.601 184.105C277.434 186.772 278.268 189.438 279.101 192.105C277.768 192.272 276.434 192.438 275.101 192.605C272.434 192.938 271.101 210.105 271.101 244.105C271.101 261.105 271.101 278.105 271.101 295.105C273.268 295.105 275.434 295.105 277.601 295.105C279.768 295.105 281.934 295.105 284.101 295.105C283.934 291.105 283.768 287.105 283.601 283.105C283.268 275.105 284.14 270.88 282.473 270.88C281.64 270.88 278.934 271.105 278.101 271.105C278.101 270.105 278.101 269.105 278.101 268.105C278.101 266.105 278.268 264.105 278.601 262.105C278.934 260.105 279.768 259.105 281.101 259.105C281.768 259.105 282.434 259.105 283.101 259.105C282.768 256.938 282.434 254.772 282.101 252.605C281.434 248.272 282.934 240.605 286.601 229.605C288.434 224.105 290.268 218.605 292.101 213.105C293.934 218.772 295.768 224.438 297.601 230.105C301.268 241.438 302.768 248.938 302.101 252.605C301.434 256.272 300.443 258.438 302.11 259.105C303.776 259.772 306.268 261.438 306.601 264.105C306.934 266.772 307.101 268.605 307.101 269.605C307.101 270.105 307.101 270.605 307.101 271.105C306.101 271.105 305.101 271.105 304.101 271.105C303.101 271.105 302.101 271.105 301.101 271.105C301.101 275.272 301.101 279.438 301.101 283.605C301.101 287.772 301.101 291.938 301.101 296.105C303.101 296.105 305.101 296.105 307.101 296.105C309.101 296.105 311.101 296.105 313.101 296.105C312.934 298.272 312.768 300.438 312.601 302.605C312.268 306.938 312.963 309.629 309.296 309.629C305.63 309.629 300.934 309.772 300.601 311.105C300.268 312.438 300.101 335.105 300.101 379.105C300.101 401.105 300.101 423.105 300.101 445.105C302.434 444.605 304.768 444.105 307.101 443.605C311.768 442.605 314.101 437.438 314.101 428.105C314.101 418.772 316.768 413.272 322.101 411.605C327.434 409.938 335.601 406.105 346.601 400.105C357.601 394.105 367.434 387.438 376.101 380.105C384.768 372.772 391.601 366.272 396.601 360.605C401.601 354.938 406.601 348.438 411.601 341.105C416.601 333.772 420.934 326.438 424.601 319.105C428.268 311.772 431.434 304.272 434.101 296.605C436.768 288.938 439.101 279.938 441.101 269.605C443.101 259.272 444.101 246.938 444.101 232.605C444.101 218.272 443.101 205.938 441.101 195.605C439.101 185.272 436.434 175.438 433.101 166.105C429.768 156.772 424.101 145.438 416.101 132.105C408.101 118.772 398.268 106.438 386.601 95.1046C374.934 83.7716 365.101 75.7716 357.101 71.1046C349.101 66.4376 342.934 63.6046 338.601 62.6046C334.268 61.6046 330.601 61.2716 327.601 61.6046C324.601 61.9376 321.768 62.7716 319.101 64.1046C316.434 65.4376 314.268 67.2716 312.601 69.6046C310.934 71.9376 309.934 74.4376 309.601 77.1046C309.268 79.7716 309.268 81.9376 309.601 83.6046C309.768 84.4376 309.934 85.2716 310.101 86.1046C311.601 85.1046 313.101 84.1046 314.601 83.1046C317.601 81.1046 321.101 80.4376 325.101 81.1046C329.101 81.7716 331.768 83.1046 333.101 85.1046C334.434 87.1046 334.934 90.1046 334.601 94.1046C334.268 98.1046 332.268 101.438 328.601 104.105C324.934 106.772 320.434 107.605 315.101 106.605C309.768 105.605 305.101 102.938 301.101 98.6046C297.101 94.2716 294.601 88.7716 293.601 82.1046C292.601 75.4376 293.434 68.9376 296.101 62.6046C298.768 56.2716 301.768 51.6046 305.101 48.6046C308.434 45.6046 311.768 43.4376 315.101 42.1046C318.434 40.7716 320.101 39.7716 320.101 39.1046C320.101 38.4376 319.434 37.4376 318.101 36.1046C316.768 34.7716 311.101 34.4376 301.101 35.1046C291.101 35.7716 283.768 35.4376 279.101 34.1046C274.434 32.7716 269.934 30.7716 265.601 28.1046C261.268 25.4376 256.768 21.1046 252.101 15.1046C249.768 12.1046 247.434 9.1046 245.101 6.1046C243.934 8.1046 242.768 10.1046 241.601 12.1046ZM84.6006 62.1046C76.9336 68.1046 70.1006 74.2716 64.1006 80.6046C58.1006 86.9376 52.1006 94.2716 46.1006 102.605C40.1006 110.938 34.6006 119.938 29.6006 129.605C24.6006 139.272 20.6006 148.272 17.6006 156.605C14.6006 164.938 11.9336 174.272 9.60056 184.605C7.26756 194.938 5.76756 203.105 5.10056 209.105C4.43356 215.105 3.62456 226.18 4.29456 243.163C4.95856 259.997 13.9336 299.438 17.6006 310.105C19.4336 315.438 21.2676 320.772 23.1006 326.105C26.6366 334.671 34.2676 347.605 38.6006 354.605C40.7676 358.105 42.9336 361.605 45.1006 365.105C44.4336 365.438 63.2676 388.272 71.6006 396.605C79.9336 404.938 106.768 426.938 112.101 430.605C117.434 434.272 122.768 437.272 128.101 439.605C133.434 441.938 157.101 456.272 157.101 448.605C157.101 440.938 155.434 436.605 152.101 435.605C148.768 434.605 140.768 430.605 128.101 423.605C115.434 416.605 105.101 409.938 97.1006 403.605C89.1006 397.272 81.7676 390.438 75.1006 383.105C68.4336 375.772 61.9336 367.438 55.6006 358.105C49.2676 348.772 43.4336 338.438 38.1006 327.105C32.7676 315.772 28.4336 304.272 25.1006 292.605C21.7676 280.938 19.4336 270.772 18.1006 262.105C16.7676 253.438 16.4336 239.772 17.1006 221.105C17.7676 202.438 19.4336 187.438 22.1006 176.105C24.7676 164.772 27.6006 155.105 30.6006 147.105C33.6006 139.105 38.7676 128.605 46.1006 115.605C53.4336 102.605 59.6006 92.9376 64.6006 86.6046C69.6006 80.2716 76.1006 73.1046 84.1006 65.1046C88.1006 61.1046 92.1006 57.1046 96.1006 53.1046C92.2676 56.1046 88.4336 59.1046 84.6006 62.1046ZM405.601 64.1046C412.601 70.7716 418.768 77.4376 424.101 84.1046C429.434 90.7716 434.434 97.7716 439.101 105.105C443.768 112.438 448.101 120.272 452.101 128.605C456.101 136.938 459.601 145.438 462.601 154.105C465.601 162.772 468.101 171.938 470.101 181.605C472.101 191.272 473.434 204.105 474.101 220.105C474.768 236.105 474.434 249.105 473.101 259.105C471.768 269.105 469.268 280.438 465.601 293.105C461.934 305.772 457.934 316.772 453.601 326.105C449.268 335.438 443.934 344.938 437.601 354.605C431.268 364.272 423.268 374.272 413.601 384.605C403.934 394.938 396.934 401.772 392.601 405.105C388.268 408.438 381.101 413.105 371.101 419.105C361.101 425.105 352.268 429.772 344.601 433.105C336.934 436.438 333.101 441.605 333.101 448.605C333.101 455.605 357.101 441.272 365.101 437.605C373.101 433.938 378.601 430.938 381.601 428.605C384.601 426.272 402.263 413.371 406.101 410.105C410.434 405.772 414.768 401.438 419.101 397.105C427.768 388.438 439.906 374.491 446.101 366.105C451.83 358.349 464.187 335.133 468.101 326.105C470.707 319.084 471.434 315.772 473.101 310.605C476.434 300.272 484.934 267.772 484.101 270.105C484.601 265.938 485.101 261.772 485.601 257.605C486.601 249.272 486.934 239.105 486.601 227.105C486.268 215.105 485.434 205.105 484.101 197.105C482.768 189.105 480.434 179.605 477.101 168.605C473.768 157.605 469.601 146.938 464.601 136.605C459.601 126.272 453.934 116.438 447.601 107.105C441.268 97.7716 433.768 88.6046 425.101 79.6046C416.434 70.6046 409.268 64.1046 403.601 60.1046C400.768 58.1046 397.934 56.1046 395.101 54.1046C398.601 57.4376 402.101 60.7716 405.601 64.1046ZM95.1006 144.105C107.101 154.605 119.101 165.105 131.101 175.605C155.101 196.605 166.601 208.272 165.601 210.605C165.101 211.772 164.601 212.938 164.101 214.105C162.268 213.272 160.434 212.438 158.601 211.605C154.934 209.938 144.268 203.272 126.601 191.605C108.934 179.938 99.2676 169.105 97.6006 159.105C96.7676 154.105 95.9336 149.105 95.1006 144.105ZM394.101 144.105C393.601 148.938 393.101 153.772 392.601 158.605C391.601 168.272 380.934 179.938 360.601 193.605C340.268 207.272 329.601 214.105 328.601 214.105C327.601 214.105 326.601 212.938 325.601 210.605C324.601 208.272 335.768 196.605 359.101 175.605C370.768 165.105 382.434 154.605 394.101 144.105ZM70.1006 194.105C84.4336 199.938 98.7676 205.772 113.101 211.605C141.768 223.272 155.934 230.105 155.601 232.105C155.268 234.105 154.934 235.438 154.601 236.105C154.268 236.772 153.268 237.105 151.601 237.105C149.934 237.105 138.268 234.438 116.601 229.105C94.9336 223.772 81.7676 216.605 77.1006 207.605C74.7676 203.105 72.4336 198.605 70.1006 194.105ZM420.101 194.605C420.434 194.772 420.768 194.938 421.101 195.105C418.934 199.272 416.768 203.438 414.601 207.605C410.268 215.938 397.101 222.938 375.101 228.605C353.101 234.272 341.101 236.938 339.101 236.605C337.101 236.272 335.934 234.938 335.601 232.605C335.268 230.272 349.101 223.272 377.101 211.605C405.101 199.938 419.434 194.272 420.101 194.605ZM239.101 317.105C239.101 402.438 240.268 451.772 242.601 465.105C243.768 471.772 244.934 478.438 246.101 485.105C247.268 475.938 248.434 466.772 249.601 457.605C251.934 439.272 253.101 390.772 253.101 312.105C253.101 233.438 252.934 193.272 252.601 191.605C252.268 189.938 249.934 189.105 245.601 189.105C243.434 189.105 241.268 189.105 239.101 189.105C239.101 231.772 239.101 274.438 239.101 317.105ZM67.1006 251.105C81.1006 251.605 95.1006 252.105 109.101 252.605C137.101 253.605 151.268 255.438 151.601 258.105C151.768 259.438 151.934 260.772 152.101 262.105C140.434 263.438 128.768 264.772 117.101 266.105C93.7676 268.772 79.6006 266.938 74.6006 260.605C72.1006 257.438 69.6006 254.272 67.1006 251.105ZM410.601 251.105C415.101 251.105 419.601 251.105 424.101 251.105C421.434 254.272 418.768 257.438 416.101 260.605C410.768 266.938 396.768 268.938 374.101 266.605C351.434 264.272 339.934 262.105 339.601 260.105C339.268 258.105 339.268 256.605 339.601 255.605C339.934 254.605 349.601 253.605 368.601 252.605C387.601 251.605 401.601 251.105 410.601 251.105ZM154.601 276.105C155.601 278.105 155.934 279.772 155.601 281.105C155.268 282.438 145.434 287.938 126.101 297.605C106.768 307.272 92.9336 310.272 84.6006 306.605C80.4336 304.772 76.2676 302.938 72.1006 301.105C85.6006 296.438 99.1006 291.772 112.601 287.105C139.601 277.772 153.601 274.105 154.601 276.105ZM378.101 287.105C391.768 291.772 405.434 296.438 419.101 301.105C414.934 302.938 410.768 304.772 406.601 306.605C398.268 310.272 384.434 307.272 365.101 297.605C345.768 287.938 335.768 282.605 335.101 281.605C334.434 280.605 334.601 278.938 335.601 276.605C336.601 274.272 350.768 277.772 378.101 287.105ZM207.601 378.605C207.268 424.938 207.268 448.438 207.601 449.105C207.934 449.772 210.101 450.272 214.101 450.605C216.101 450.772 218.101 450.938 220.101 451.105C220.101 427.438 220.101 403.772 220.101 380.105C220.101 356.438 220.101 332.772 220.101 309.105C218.101 309.105 216.101 309.105 214.101 309.105C212.101 309.105 210.101 309.105 208.101 309.105C207.934 332.272 207.768 355.438 207.601 378.605ZM271.101 380.105C271.101 403.772 271.101 427.438 271.101 451.105C272.101 451.105 273.101 451.105 274.101 451.105C276.101 451.105 278.101 450.938 280.101 450.605C282.101 450.272 283.101 426.605 283.101 379.605C283.101 356.105 283.101 332.605 283.101 309.105C281.101 309.105 279.101 309.105 277.101 309.105C275.101 309.105 273.101 309.105 271.101 309.105C271.101 332.772 271.101 356.438 271.101 380.105Z'
						fill='currentColor'
					/>
				</g>
			</svg>
			<strong style={{ fontSize: '2rem' }}> NeoPromisance</strong>
		</>
	),
	project: {
		link: 'https://github.com/blake365',
	},
	chat: {
		link: 'https://discord.gg/bnuVy2pdgM',
	},
	docsRepositoryBase: 'https://github.com/blake365/neo-guide/tree/main/',
	footer: {
		text: 'NeoPromisance - 2023',
	},
	toc: {
		backToTop: true,
	},
}

export default config
