using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookCrudApi.Data;
using BookCrudApi.Models;

namespace BookCrudApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class BooksController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        
        public BooksController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            return await _context.Books.OrderByDescending(b => b.CreatedAt).ToListAsync();
        }
        
        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            
            if (book == null)
            {
                return NotFound();
            }
            
            return book;
        }
        
        // POST: api/Books
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(CreateBookRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var book = new Book
            {
                Title = request.Title,
                Author = request.Author,
                PublicationDate = request.PublicationDate,
                Description = request.Description,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };
            
            _context.Books.Add(book);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
        }
        
        // PUT: api/Books/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(int id, UpdateBookRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            
            book.Title = request.Title;
            book.Author = request.Author;
            book.PublicationDate = request.PublicationDate;
            book.Description = request.Description;
            book.UpdatedAt = DateTime.UtcNow;
            
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            
            return Ok(book);
        }
        
        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            
            _context.Books.Remove(book);
            await _context.SaveChangesAsync();
            
            return NoContent();
        }
        
        private bool BookExists(int id)
        {
            return _context.Books.Any(e => e.Id == id);
        }
    }
    
    public class CreateBookRequest
    {
        public string Title { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public DateTime PublicationDate { get; set; }
        public string? Description { get; set; }
    }
    
    public class UpdateBookRequest
    {
        public string Title { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public DateTime PublicationDate { get; set; }
        public string? Description { get; set; }
    }
}

