#import "appDelegate.h"

@implementation MyWindow

-(void) keyDown: (NSEvent *) event {
	NSLog(@"Blaaaa");
	[super keyDown: event];	
}

@end

@implementation SubstanceAppDelegate

@synthesize window;
@synthesize webView;

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification {
	NSString *cwd = [[NSFileManager defaultManager] currentDirectoryPath];	
	NSString *url =  [NSString stringWithFormat: @"file://%@/index.html", cwd];
	[ [webView mainFrame] loadRequest: 
		[NSURLRequest requestWithURL: [NSURL URLWithString:url] ]
	];
}

@end
